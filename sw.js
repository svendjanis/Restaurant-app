self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'Restaurant apppp/css/styles.css/',
                'Restaurant apppp/data/restaurants.json/',
                'Restaurant apppp/img/1.png',
                "Restaurant apppp/img/2.png",
                "Restaurant apppp/img/3.png",
                "Restaurant apppp/img/4.png",
                "Restaurant apppp/img/5.png",
                "Restaurant apppp/img/6.png",
                "Restaurant apppp/img/7.png",
                "Restaurant apppp/img/8.png",
                "Restaurant apppp/img/9.png",
                "Restaurant apppp/img/10.png",
                'Restaurant apppp/js/dhelper.js',
                'Restaurant apppp/js/main.js',
                'Restaurant apppp/CODEOWNERS',
                "Restaurant apppp/index.html",
                'Restaurant apppp/README.md',
                'Restaurant apppp/restaurant.html'
            ]);
        })
    );
});
