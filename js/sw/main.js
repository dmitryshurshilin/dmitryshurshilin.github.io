if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => {
                console.log(`Service Worker is registered -- ${reg.scope}`)
            })
            .catch(err => {
                console.log(`Service Worker is not registered -- ${err}`)
            })
    })
} 