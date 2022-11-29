const CACHE_NAME = 'AssetsCache'

const RESOURCES_TO_CACHE = [
    '/service-workers/',
    '/service-workers/main.js',
    '/service-workers/styles.css',
    '/service-workers/assets/unsplash-photo-1.avif',
    '/service-workers/assets/unsplash-photo-2.avif',
    '/service-workers/assets/unsplash-photo-3.avif',
    '/service-workers/assets/unsplash-photo-4.avif',
    '/service-workers/assets/unsplash-photo-5.avif',
]

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(RESOURCES_TO_CACHE)
    }))
})

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url)
    const isCachedResource = RESOURCES_TO_CACHE.includes(url.pathname)

    if (isCachedResource) {
        event.respondWith(caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request.url)
        }))
    }
    else {
        return
    }
})
