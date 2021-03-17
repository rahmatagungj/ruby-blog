if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("An active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("./sw.js", {
        scope: "./"
      })
      .then(function (reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
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
  console.log(location);
  xhttp.open('GET', location, true);
  xhttp.send();
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('local-link')) {
    e.preventDefault();
    if (window.location.pathname != e.target.pathname) {
      history.pushState({}, '', e.target.pathname);
      changeView(e.target.pathname);
    }
  }
});

window.addEventListener('popstate', function (e) {
  changeView(window.location.pathname);
});