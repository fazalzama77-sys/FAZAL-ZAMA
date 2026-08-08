// =========================================================
// VETERINARY ANATOMY STUDIO — SERVICE WORKER (automatic-update + offline fallback)
// Strategy:
//   • Same-origin HTML/JS/CSS/data always bypass the browser HTTP cache.
//   • A versioned app shell is populated completely before activation.
//   • Invalid deployment-time HTML responses never replace cached JS/CSS.
//   • Same-origin cache keys ignore query strings to prevent duplicate entries.
//   • Cross-origin CDN assets use stale-while-revalidate.
// =========================================================

const OFFLINE_CACHE = 'veterinary-anatomy-studio-offline-v2';
const OWN_CACHE_PATTERN = /^(?:ivri-anatomy-(?:offline|v\d+)|veterinary-anatomy-studio-offline-v\d+)$/;

// App shell — files needed for the site to work offline.
const APP_SHELL = [
    './',
    './index.html',
    './style.css',
    './dashboard.css',
    './enhanced-quiz.css',
    './elite-guide.css',
    './events.css',
    './annotation-editor.css',
    './annotation-editor.html',
    './app.js',
    './annotation-editor.js',
    './dashboard.js',
    './enhanced-quiz.js',
    './elite-guide.js',
    './events-data.js',
    './events.js',
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

// ---- INSTALL: build the complete new offline shell before activation ----
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(OFFLINE_CACHE).then((cache) => refreshAppShell(cache))
    );
});

// ---- ACTIVATE: remove superseded app caches and control open tabs ----
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            const supersededKeys = keys.filter((key) =>
                key !== OFFLINE_CACHE && OWN_CACHE_PATTERN.test(key)
            );
            return Promise.all(supersededKeys.map((key) => caches.delete(key)));
        }).then(() => self.clients.claim())
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
        // Cloudflare internals are not application assets and must not occupy
        // offline storage.
        if (url.pathname.startsWith('/cdn-cgi/')) return;
        // ============== NETWORK-FIRST for our own files ==============
        event.respondWith(networkFirst(req));
    } else if (url.hostname === 'api.github.com' || url.searchParams.has('ivri_check')) {
        // Deployment checks are timestamped and useless offline. Caching them
        // creates an unbounded list of one-use responses.
        event.respondWith(fetch(req));
    } else {
        // ============== STALE-WHILE-REVALIDATE for CDN assets ==============
        event.respondWith(staleWhileRevalidate(req));
    }
});

// Network-first: try fetch, fall back to cache, finally fall back to index.html for navigations
function networkFirst(req) {
    const requestUrl = new URL(req.url);
    const isUpdateProbe = requestUrl.searchParams.has('ivri_update_check');
    const cacheKey = cacheKeyFor(req);
    return fetch(req, { cache: 'no-store' }).then((res) => {
        // During a deployment, static hosts can briefly return index.html for
        // a JS/CSS URL. Never execute or cache that mismatched response.
        if (!isExpectedAssetResponse(req, res)) {
            throw new Error(`Unexpected response for ${requestUrl.pathname}`);
        }

        if (!isUpdateProbe) {
            const clone = res.clone();
            caches.open(OFFLINE_CACHE).then((cache) => cache.put(cacheKey, clone)).catch(() => {});
        }
        return res;
    }).catch(() =>
        caches.match(cacheKey).then((cached) => {
            if (cached) return cached;
            if (isHtmlRequest(req)) return caches.match(cacheKeyFor(new Request('./index.html')));
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
            const request = new Request(url, { cache: 'reload' });
            const response = await fetch(request);
            if (!isExpectedAssetResponse(request, response)) {
                throw new Error(`Could not cache required offline asset: ${url}`);
            }
            await cache.put(cacheKeyFor(request), response.clone());
        })
    );
}

function cacheKeyFor(req) {
    const url = new URL(req.url);
    url.search = '';
    url.hash = '';
    return new Request(url.href, { method: 'GET' });
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
