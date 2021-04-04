if ("serviceWorker" in navigator) {
  if (!navigator.serviceWorker.controller) {
    navigator.serviceWorker
      .register("./sw.js", {
        scope: "./",
      })
      .then(function (reg) {});
  }
}
