self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/app.js',
        '/test.json',
      ])
    })
  )
})


self.addEventListener('fetch', (event) => {
  console.log('fetch', event.request)
  event.respondWith(
    caches.match(event.request).then((resp) => {
      console.log('19')
      return resp || fetch(event.request).then(response => {
        console.log('sw', event.request)
        // caches.put(event.request, event.request.clone())
        return response
      })
    }).catch(error => {
      console.log(error)
      return new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
        headers: { 'Content-Type': 'application/json' }
      });
      

    })
  )
})