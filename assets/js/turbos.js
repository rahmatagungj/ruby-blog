if(Turbolinks.supported) {
  Turbolinks.start()
} else {
  // Show notification if browser not support
  document.body.className = "not_support";
  setTimeout(() => {
    document.body.classList.remove("not_support");
  }, 2000);
}

Turbolinks.setProgressBarDelay(2750)
