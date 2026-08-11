const CACHE_NAME = 'artemis-funktafel-v1.3';
const OFFLINE_URL = './index.html';
const APP_SHELL = [
  './index.html',
  './styles.css?v=1.3',
  './app.js?v=1.3',
  './manifest.webmanifest',
  './icon.svg',
  './icon-180.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestURL = new URL(event.request.url);
  if (requestURL.origin !== self.location.origin) return;

  // iOS/PWA starts with a navigation request. Always provide the cached app
  // when the network is unavailable, regardless of trailing slash/path form.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const network = await fetch(event.request);
        if (network && network.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(OFFLINE_URL, network.clone());
        }
        return network;
      } catch (e) {
        const cached = await caches.match(OFFLINE_URL, { ignoreSearch: true });
        return cached || Response.error();
      }
    })());
    return;
  }

  // Static resources: cached first, network as fallback and refresh cache.
  event.respondWith((async () => {
    const cached = await caches.match(event.request, { ignoreSearch: false });
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch (e) {
      return Response.error();
    }
  })());
});
