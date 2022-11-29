const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('service-worker.js')
        }
        catch (error) {
            console.error(`Registration failed with ${error}`)
        }
    }
}
registerServiceWorker()
