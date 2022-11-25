const CACHE_NAME = 'test-cache-name'
const ULRS_TO_CACHE = [
    '/',
    '/js/',
    '/js/sw/',
    '/js/sw/data.json',
    'data.json'
]
const OFFLINE_URL = 'offline.html'

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ULRS_TO_CACHE)
            })
    )
})

self.addEventListener("fetch", (event) => {
    // Only call event.respondWith() if this is a navigation request
    // for an HTML page.
    if (event.request.mode === "navigate") {
        event.respondWith(
            (async () => {
                try {
                    // First, try to use the navigation preload response if it's
                    // supported.
                    const preloadResponse = await event.preloadResponse;
                    if (preloadResponse) {
                        return preloadResponse;
                    }
  
                    // Always try the network first.
                    const networkResponse = await fetch(event.request);
                        return networkResponse;
                    } catch (error) {
                        // catch is only triggered if an exception is thrown, which is
                        // likely due to a network error.
                        // If fetch() returns a valid HTTP response with a response code in
                        // the 4xx or 5xx range, the catch() will NOT be called.
                        console.log("Fetch failed; returning offline page instead.", error);
    
                        const cache = await caches.open(CACHE_NAME);
                        const cachedResponse = await cache.match(OFFLINE_URL);
                        return cachedResponse;
                    }
            })()
        );
    }
})