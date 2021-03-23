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

Turbolinks.setProgressBarDelay(2750);

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

// CALL FUNCTION
document.addEventListener("turbolinks:load", function () {
  a2hs();
  networkNotification();
});

function a2hs() {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  const btnInstallApp = document.getElementById("addButton");

  if (btnInstallApp) {
    btnInstallApp.addEventListener("click", (e) => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("user accepted A2HS prompt");
        } else {
          console.log("user dismissed A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  }
}

function networkNotification() {
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
}
