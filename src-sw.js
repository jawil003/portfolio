workbox.core.setCacheNameDetails({
  prefix: "Portfolio",
});
workbox.precaching.cleanupOutdatedCaches();
workbox.precaching.precacheAndRoute(
  self.__precacheManifest
);

workbox.routing.setCatchHandler(({ event }) => {
  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c

  return caches.match("/");
});
