// =========================================================
// IVRI ANATOMY — SERVICE WORKER (automatic-update + offline fallback)
// Strategy:
//   • Same-origin HTML/JS/CSS/data always bypass the browser HTTP cache.
//   • Successful network responses refresh one stable offline cache.
//   • Invalid deployment-time HTML responses never replace cached JS/CSS.
//   • No manual cache-version bump is required for ordinary content uploads.
//   • Cross-origin CDN assets use stale-while-revalidate.
// =========================================================

const OFFLINE_CACHE = 'ivri-anatomy-offline';
const LEGACY_CACHE_PATTERN = /^ivri-anatomy-v\d+$/;

// App shell — files needed for the site to work offline.
const APP_SHELL = [
    './',
    './index.html',
    './style.css',
    './dashboard.css',
    './enhanced-quiz.css',
    './annotation-editor.css',
    './annotation-editor.html',
    './app.js',
    './annotation-editor.js',
    './dashboard.js',
    './enhanced-quiz.js',
    './search.js',
    './srs.js',
    './glossary.js',
    './data-image-annotations.JS',
    './data-introduction.JS',
    './data-forelimb.JS',
    './data-hindlimb.JS',
    './data-thorax.JS',
    './data-abdomen.JS',
    './data-head-neck.JS',
    './data-splanchnology.JS',
    './data-histology.JS',
    './data-embryology.JS',
    './data-quiz.JS',
    './data-why.js?v=20260720',
    './favicon.ico',
    './favicon-48x48.png',
    './images/apple-touch-icon.png',
    './images/icon-192.png',
    './images/icon-512.png',
    './images/scapula-ox-horse-dog-annotated.png',
    './manifest.json'
];

// ---- INSTALL: refresh the offline shell and activate immediately ----
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(OFFLINE_CACHE).then((cache) => refreshAppShell(cache))
    );
});

// ---- ACTIVATE: remove numbered legacy caches and control open tabs ----
self.addEventListener('activate', (event) => {
    let shouldMigrateLegacyClients = false;
    event.waitUntil(
        caches.keys().then((keys) => {
            const legacyKeys = keys.filter((key) =>
                key !== OFFLINE_CACHE && LEGACY_CACHE_PATTERN.test(key)
            );
            shouldMigrateLegacyClients = legacyKeys.length > 0;
            return Promise.all(legacyKeys.map((key) => caches.delete(key)));
        }).then(() => self.clients.claim())
            // This one activation reload migrates pages still running the old
            // banner-based updater. Future content-only uploads are handled by
            // app.js without another service-worker change.
            .then(() => shouldMigrateLegacyClients
                ? self.clients.matchAll({ type: 'window', includeUncontrolled: true })
                : []
            )
            .then((windows) => Promise.all(
                windows.map((client) => client.navigate(client.url).catch(() => null))
            ))
    );
});

// ---- MESSAGE: page asked us to skip waiting and activate immediately ----
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const target = event.notification.data?.url || '/quiz/';
    event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windows) => {
        const existing = windows[0];
        if (existing) {
            existing.navigate(target);
            return existing.focus();
        }
        return clients.openWindow(target);
    }));
});

// ---- FETCH: routing logic ----
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    const isSameOrigin = url.origin === self.location.origin;

    if (isSameOrigin) {
        // ============== NETWORK-FIRST for our own files ==============
        event.respondWith(networkFirst(req));
    } else {
        // ============== STALE-WHILE-REVALIDATE for CDN assets ==============
        event.respondWith(staleWhileRevalidate(req));
    }
});

// Network-first: try fetch, fall back to cache, finally fall back to index.html for navigations
function networkFirst(req) {
    const requestUrl = new URL(req.url);
    const isUpdateProbe = requestUrl.searchParams.has('ivri_update_check');
    return fetch(req, { cache: 'no-store' }).then((res) => {
        // During a deployment, static hosts can briefly return index.html for
        // a JS/CSS URL. Never execute or cache that mismatched response.
        if (!isExpectedAssetResponse(req, res)) {
            throw new Error(`Unexpected response for ${requestUrl.pathname}`);
        }

        if (!isUpdateProbe) {
            const clone = res.clone();
            caches.open(OFFLINE_CACHE).then((cache) => cache.put(req, clone)).catch(() => {});
        }
        return res;
    }).catch(() =>
        caches.match(req).then((cached) =>
            cached || caches.match(req, { ignoreSearch: true })
        ).then((cached) => {
            if (cached) return cached;
            if (isHtmlRequest(req)) return caches.match('./index.html');
            return new Response('', { status: 504, statusText: 'Offline and not cached' });
        })
    );
}

// Stale-while-revalidate: return cache immediately, refresh in background
function staleWhileRevalidate(req) {
    return caches.open(OFFLINE_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
            const networkFetch = fetch(req).then((res) => {
                if (res && res.status === 200 && res.type !== 'opaque') {
                    cache.put(req, res.clone()).catch(() => {});
                }
                return res;
            }).catch(() => cached);
            return cached || networkFetch;
        })
    );
}

function refreshAppShell(cache) {
    return Promise.all(
        APP_SHELL.map(async (url) => {
            try {
                const request = new Request(url, { cache: 'reload' });
                const response = await fetch(request);
                if (!isExpectedAssetResponse(request, response)) {
                    throw new Error('unexpected content type');
                }
                await cache.put(request, response.clone());
            } catch (error) {
                console.warn('[SW] keeping existing offline copy:', url, error.message);
            }
        })
    );
}

function isHtmlRequest(req) {
    return req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
}

function isExpectedAssetResponse(req, res) {
    if (!res || res.status !== 200 || res.type === 'opaque') return false;

    const pathname = new URL(req.url).pathname.toLowerCase();
    const contentType = (res.headers.get('content-type') || '').toLowerCase();

    if (isHtmlRequest(req) || pathname.endsWith('.html') || pathname.endsWith('/')) {
        return contentType.includes('text/html');
    }
    if (pathname.endsWith('.js')) return contentType.includes('javascript');
    if (pathname.endsWith('.css')) return contentType.includes('text/css');
    if (/\.(?:png|jpe?g|webp|svg|avif|ico)$/.test(pathname)) {
        return contentType.startsWith('image/') || pathname.endsWith('.ico');
    }
    if (/\.(?:json|webmanifest)$/.test(pathname)) {
        return contentType.includes('json') || contentType.includes('manifest');
    }

    return !contentType.includes('text/html');
}
