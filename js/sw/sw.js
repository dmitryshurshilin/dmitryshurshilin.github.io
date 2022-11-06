const CACHE_NAME = 'test-cache-name'
const ULRS_TO_CACHE = [
    '/'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ULRS_TO_CACHE)
            })
    )
})