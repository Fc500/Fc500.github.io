const standApp = "jamman-game-beta"
const assets = [
  "/",
  "/jamman.html",
  "/jamman.css",
  "/jamman.js",
  "/berries/icon-96x96.png"
  "/berries/icon-512x512.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(standApp).then(cache => {
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
