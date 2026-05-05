/* ── AjustaHora Service Worker ──────────────────────────────── */
const CACHE_NAME = 'ajustahora-v1';

/* Arquivos essenciais para funcionar offline */
const PRECACHE = [
  './',
  './index.html',
  './manifest.json'
];

/* ── Install: pré-cacheia shell do app ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

/* ── Activate: remove caches antigos ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: Network-first com fallback para cache ── */
self.addEventListener('fetch', event => {
  /* Ignora requisições não-GET e cross-origin (ex: Google Fonts CDN) */
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;

  /* Para recursos locais: cache-first (app shell offline) */
  if (isSameOrigin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const network = fetch(event.request).then(response => {
          /* Atualiza cache em background */
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        });
        return cached || network;
      })
    );
    return;
  }

  /* Para CDNs (fontes, ícones): stale-while-revalidate */
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        const network = fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        }).catch(() => cached);
        return cached || network;
      })
    )
  );
});
