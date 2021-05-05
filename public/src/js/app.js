if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker registed', reg))
        .catch((err) => console.log('service worker not registed', err));
}