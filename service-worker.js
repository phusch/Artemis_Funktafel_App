const CACHE_NAME = 'artemis-funktafel-v1.4.7';
const OFFLINE_URL = './index.html';
const APP_SHELL = [
  './index.html',
  './styles.css?v=1.4.7',
  './app.js?v=1.4.7',
  './manifest.webmanifest',
  './icon.svg',
  './icon-180.png',
  './icon-512.png',
  './assets/bowline.png',
  './assets/clove.jpg',
  './assets/half-hitch-post.jpg',
  './assets/figure-eight.jpg',
  './assets/fender-use.jpg',
  './assets/cleat-use.jpg',
  './assets/use-palstek-fender.svg',
  './assets/use-palstek-ring.svg',
  './assets/use-palstek-poller.svg',
  './assets/use-webeleinstek-fender.svg',
  './assets/use-webeleinstek-post.svg',
  './assets/use-webeleinstek-gesichert-fender.svg',
  './assets/use-webeleinstek-gesichert-stuetze.svg',
  './assets/use-rundtoern-ring.svg',
  './assets/use-rundtoern-dalben.svg',
  './assets/use-achtknoten-fairlead.svg',
  './assets/use-achtknoten-ende.svg',
  './assets/use-klampe-vorleine.svg',
  './assets/use-klampe-spring.svg',
  './assets/mooring-side-detailed.svg',
  './assets/mooring-stern-detailed.svg',
  './assets/spring-aft-detailed.svg',
  './assets/spring-forward-detailed.svg',
  './assets/use-palstek-fender-real.jpg',
  './assets/use-palstek-kai-real.jpg',
  './assets/use-palstek-poller-real.jpg',
  './assets/use-webeleinstek-fender-real.jpg',
  './assets/use-webeleinstek-post-real.jpg',
  './assets/use-webeleinstek-gesichert-fender-real.jpg',
  './assets/use-webeleinstek-gesichert-stuetze-real.jpg',
  './assets/webeleinstek-gesichert-step.jpg',
  './assets/use-rundtoern-post-real.jpg',
  './assets/use-rundtoern-bollard-real.jpg',
  './assets/use-achtknoten-fairlead-real.jpg',
  './assets/use-achtknoten-ende-real.jpg',
  './assets/use-klampe-vorleine-real.jpg',
  './assets/use-klampe-spring-real.jpg',
  './assets/mooring-side-photo.jpg',
  './assets/mooring-stern-photo.jpg',
  './assets/webeleinstek-gesichert-steps-approved.jpg',
  './assets/webeleinstek-gesichert-final-approved.jpg',
  './assets/webeleinstek-gesichert-rail-approved.jpg',
  './assets/webeleinstek-gesichert-fender-approved.jpg',
  './assets/cleat-step-diagram-approved.jpg',
  './assets/cleat-half-approved.jpg',
  './assets/cleat-finish-approved.jpg',
  './assets/cleat-use-vorleine-approved.jpg',
  './assets/cleat-use-spring-approved.jpg',
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
