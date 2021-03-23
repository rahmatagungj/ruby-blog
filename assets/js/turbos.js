if(Turbolinks.supported) {
  Turbolinks.start()
  console.log("start")
} else {
  console.warn("browser kamu tidak mendukung `Turbolinks`")
}
