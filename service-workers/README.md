# Service worker caching

## Cache only strategy

![Cache only strategy](assets/cache-only-strategy.avif "Cache only strategy")

**"Cache Only Strategy"**: when the service worker is in control of the page, matching requests will only ever go to the cache. This means that any cached assets will need to be precached in order to be available for the pattern to work, and that those assets will never be updated in the cache until the service worker is updated.

**Example:**
[service-worker.js](service-worker.js)


**Source:**
https://developer.chrome.com/docs/workbox/caching-strategies-overview/
