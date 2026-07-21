// =========================================================
// IVRI ANATOMY — SERVICE WORKER (v3 — deployed-version aware)
// Strategy:
//   • Same-origin (our HTML/JS/CSS/data files) → NETWORK-FIRST with cache fallback.
//     This means online users ALWAYS get the latest GitHub-deployed version.
//     Cache is only used when offline.
//   • Cross-origin (CDN fonts, icons) → STALE-WHILE-REVALIDATE.
//     Cached copy returns instantly; fresh copy quietly updates the cache.
//
// Update flow:
//   1. The page checks GitHub and verifies the same bytes are live on Cloudflare.
//   2. It shows a small refresh notice only after deployment is complete.
//   3. Refresh loads same-origin files from the network, with offline fallback.
// =========================================================

const CACHE_VERSION = 'ivri-anatomy-v35';

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

// ---- INSTALL: pre-cache the app shell and activate immediately ----
// We auto-skip waiting so the fresh network-first worker is ready immediately.
// The page itself decides when to show the deployed-version refresh notice.
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) =>
            Promise.all(
                APP_SHELL.map((url) =>
                    cache.add(url).catch((err) =>
                        console.warn('[SW] skip pre-cache:', url, err.message)
                    )
                )
            )
        )
    );
});

// ---- ACTIVATE: clean old caches & take control of all open tabs ----
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
            )
        ).then(() => self.clients.claim())
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
    // Revalidate normal files so an HTTP max-age cannot hide a new deployment,
    // while still allowing efficient 304 responses. Probes bypass HTTP cache.
    const browserCacheMode = isUpdateProbe ? 'no-store' : 'no-cache';
    return fetch(req, { cache: browserCacheMode }).then((res) => {
        // Update the cache for next time (only successful responses)
        if (!isUpdateProbe && res && res.status === 200 && res.type !== 'opaque') {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, clone)).catch(() => {});
        }
        return res;
    }).catch(() =>
        caches.match(req).then((cached) => {
            if (cached) return cached;
            // Final fallback for HTML navigations: serve cached index.html
            if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
                return caches.match('./index.html');
            }
            return new Response('', { status: 504, statusText: 'Offline and not cached' });
        })
    );
}

// Stale-while-revalidate: return cache immediately, refresh in background
function staleWhileRevalidate(req) {
    return caches.open(CACHE_VERSION).then((cache) =>
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
