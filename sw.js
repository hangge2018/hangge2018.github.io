self.addEventListener('fetch', (event) => {
    // 简单的透传缓存逻辑
    event.respondWith(fetch(event.request));
});
