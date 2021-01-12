self.addEventListener("install", e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(["./","/reto-netflix/styles.css","/reto-netflix/detalle.css",
            "./images/favicon-50x50.png","/reto-netflix/images/logo-netflix.png",
            "/reto-netflix/images/covers/matrix.png","/reto-netflix/images/covers/bob.png",
            "/reto-netflix/images/covers/spider-man.png","/reto-netflix/images/covers/dragon.png",
            "/reto-netflix/images/covers/santa.png"]);
        })
    );
    console.log("Installed");
});

self.addEventListener('fetch', e => {
    console.log(`Intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
//Cache resources for future use