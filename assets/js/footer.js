if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js');
  });
} else {
  console.log("Service Worker not Supported")
}