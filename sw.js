self.addEventListener("install", (event) => {
    console.log("service worker has been installed")
})

self.addEventListener("activation", (event) => {
    console.log("service worker has been activated")
})

self.addEventListener("fetch", (event) => {
    console.log("fetch event")
})