importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0127f120d564eb79cb0a.js",
    "revision": "d3096208d2eb78c54c1c3e58cba9d431"
  },
  {
    "url": "/_nuxt/279538d8fa3d6e374cbc.js",
    "revision": "ea68c5febb1a39c2a384d2fddfbf5107"
  },
  {
    "url": "/_nuxt/470054a828e44a0c7243.js",
    "revision": "36cae915e6f0d6a5b170dab23d99c755"
  },
  {
    "url": "/_nuxt/5d8a071497b0928f1220.js",
    "revision": "de39c7d3ecd6b719e66a2b9f83301f0c"
  },
  {
    "url": "/_nuxt/70b34e6811d9103e50c6.js",
    "revision": "faf9f2e0f3992171e0c5a94f2b42a810"
  },
  {
    "url": "/_nuxt/a792453b766c64e7a2d7.js",
    "revision": "a4725d044511d924281eed056acabfd1"
  },
  {
    "url": "/_nuxt/a8786ec4ece7ce6af9c1.js",
    "revision": "307a465b8c698177e46ff3b1ab44b1a2"
  },
  {
    "url": "/_nuxt/b14fdc4a3a58750d6587.js",
    "revision": "7b61225c4afbbe6398cfc2473ccdbf6a"
  },
  {
    "url": "/_nuxt/b4c2d827e7b8480e9070.js",
    "revision": "bb3dec8fc61a7b0056f8a7f52d62688f"
  },
  {
    "url": "/_nuxt/c784228e82894e324811.js",
    "revision": "fa30da0fbef69506bf558854fd23d617"
  }
], {
  "cacheId": "xayer.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
