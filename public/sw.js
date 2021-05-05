const staticCache = 'static-site-v31';
const dynamicCache = 'dynamic-site-v30';
//The core files below
const assets = [
    '/',
    '/index.html',
    '/src/js/app.js',
    '/src/js/auth.js',
    '/src/js/authCheck.js',
    '/src/js/freshers.js',
    '/src/js/index.js',
    '/src/js/location.js',
    '/src/js/nav.js',
    '/src/css/freshers.css',
    '/src/css/style.css',
    '/src/img/Edge-Hill-University-new.png',
    '/src/img/1-1.jpg',
    '/src/img/catalyst.jpg',
    '/src/img/colour2.jpg',
    '/src/img/ducks.jpg',
    '/src/img/food place.jpg',
    '/src/img/lecture.jpg',
    '/src/img/seminar.jpg',
    '/src/img/sports.jpg',
    '/src/img/techhub.jpg',
    '/src/img/tester.jpg',
    '/src/img/tester2.jpg',
    '/src/img/tester3.jpg',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v85/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    '/pages/fallback.html'
];
//Ref https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=1
//Ref https://adactio.medium.com/cache-limiting-in-service-workers-d6741361ca19
//Ref https://web.dev
//c cache size limiting





//install service worker test
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCache).then((cache) => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    );
  });

//active service worker
self.addEventListener('activate', evt => {
    evt.waitUntil(
        //looks for all the keys = different caches
        caches.keys().then(keys =>{
            //deletes none active cache
            return Promise.all(keys
                .filter(key => key !== staticCache && key !== dynamicCache)
                .map(key => caches.delete(key))
                )

        })
    )
});

//fetch event
self.addEventListener('fetch', evt => {
    if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
    evt.respondWith(
        // Seeing if anything matches with the pre cached cache
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                // Dynamiclly caches the other pages whh
                return caches.open(dynamicCache).then(cache =>{
                    cache.put(evt.request.url, fetchRes.clone());

                    return fetchRes
                })
            });
        }).catch(() => caches.match('/pages/fallback.html'))
    )
    }
});
