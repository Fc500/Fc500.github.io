const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/app.html",
  "/css/styles.css",
  "/css/menu.css",
  "/js/app.js",
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