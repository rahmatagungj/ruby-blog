if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    // console.log("An active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("./sw.js", {
        scope: "./"
      })
      .then(function (reg) {
        // console.log("Service worker has been registered for scope: " + reg.scope);
      });
  }
}

function changeView(location) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      document.title = data["title"];
      document.querySelector('main').innerHTML = data["content"];
      window.scrollTo(0, 0);
    }
  };
  if (location === '/') {
    location = '/index';
  }
  location = '/api' + location + '.json';
  // console.log(location);
  xhttp.open('GET', location, true);
  xhttp.send();
}

window.addEventListener('popstate', function (e) {
  changeView(window.location.pathname);
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('local-link')) {
    e.preventDefault();
    if (window.location.pathname != e.target.pathname) {
      history.pushState({}, '', e.target.pathname);
      changeView(e.target.pathname);
    }
  }
});




// ADD TO HOMESCREEN
let deferredPrompt;

const addBtn = document.getElementById("addButton")

addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
