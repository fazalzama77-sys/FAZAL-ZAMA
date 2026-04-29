// =========================================================
// IVRI ANATOMY — SERVICE WORKER (Offline-first PWA)
// Cache-first for app shell + data; network-first for everything else.
// Bump CACHE_VERSION whenever any cached file changes.
// =========================================================

const CACHE_VERSION = 'ivri-anatomy-v1';

// App shell — files needed for the site to load offline.
const APP_SHELL = [
    './',
    './index.html',
    './style.css',
    './dashboard.css',
    './enhanced-quiz.css',
    './app.js',
    './dashboard.js',
    './enhanced-quiz.js',
    './search.js',
    './srs.js',
    './glossary.js',
    './data-forelimb.JS',
    './data-hindlimb.JS',
    './data-thorax.JS',
    './data-abdomen.JS',
    './data-head-neck.JS',
    './data-splanchnology.JS',
    './data-quiz.JS',
    './data-why.JS',
    './manifest.json'
];

// ---- INSTALL: pre-cache the app shell ----
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) => {
            // addAll fails if any single request fails — use individual addAll-ignore-error pattern
            return Promise.all(
                APP_SHELL.map((url) =>
                    cache.add(url).catch((err) => console.warn('[SW] skip', url, err.message))
                )
            );
        }).then(() => self.skipWaiting())
    );
});

// ---- ACTIVATE: clean old caches ----
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// ---- FETCH: cache-first for same-origin shell assets, network-first for the rest ----
self.addEventListener('fetch', (event) => {
    const req = event.request;

    // Only cache GET
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    const isSameOrigin = url.origin === self.location.origin;

    if (isSameOrigin) {
        // Cache-first for our own files.
        event.respondWith(
            caches.match(req).then((cached) => {
                if (cached) return cached;
                return fetch(req).then((res) => {
                    // Successful fetch → cache it for next time
                    if (res && res.status === 200) {
                        const clone = res.clone();
                        caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
                    }
                    return res;
                }).catch(() => caches.match('./index.html'));
            })
        );
    } else {
        // Network-first for CDN assets (fonts, icons, images).
        event.respondWith(
            fetch(req).then((res) => {
                if (res && res.status === 200) {
                    const clone = res.clone();
                    caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
                }
                return res;
            }).catch(() => caches.match(req))
        );
    }
});
