if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service Worker is working correctly!'))
        .catch(() => console.log('Service Worker is failing, check it out!'))
} 
