// SPA
if (Turbolinks.supported) {
  Turbolinks.start();
} else {
  // Show notification if browser not support
  document.body.className = "not_support";
  setTimeout(() => {
    document.body.classList.remove("not_support");
  }, 2000);
}

Turbolinks.setProgressBarDelay(2000);

// PWA
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    // console.log("An active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("./sw.js", {
        scope: "./",
      })
      .then(function (reg) {
        // console.log("Service worker has been registered for scope: " + reg.scope);
      });
  }
}

// We are "offline".
window.addEventListener("offline", () => {
  document.body.className = "offline";
  setTimeout(() => {
    document.body.classList.remove("offline");
  }, 2000);
});

// When we back "online".
window.addEventListener("online", () => {
  document.body.className = "online";
  setTimeout(() => {
    document.body.classList.remove("online");
  }, 2000);
});

Turbolinks.enableTransitionCache(true);
Turbolinks.visit(location.toString());
Turbolinks.enableTransitionCache(false);

console.log("hai");
