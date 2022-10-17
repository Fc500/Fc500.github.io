const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "index.html",
  "styles.css",
  "app.js",
  "/images/icon-192x192.png",
  "/images/icon-512x512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})