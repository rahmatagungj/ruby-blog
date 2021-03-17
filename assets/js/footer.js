if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(
    function (registration) {
      console.log("service worker registration succeeded:", registration);
    },
    function (error) {
      console.log("service worker registration failed:", error);
    }
  );
} else {
  console.log("service workers are not supported.");
}
