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

// CAALL FUNCTION
document.addEventListener("turbolinks:load", function() {
  a2hs()
  networkNotification()
})


function a2hs() {
  let deferredPrompt;

  const addBtn = document.getElementById("addButton");

  addBtn.style.display = "none";

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = "block";

    addBtn.addEventListener("click", (e) => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = "none";
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  });
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

