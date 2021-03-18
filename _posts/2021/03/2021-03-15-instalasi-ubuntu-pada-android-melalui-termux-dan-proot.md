---
layout: post
author: Rahmat Agung Julians
image: Linux
comments: false
title: Instalasi Ubuntu pada Android melalui Termux dan Proot
description: Cara memasang ubuntu pada android melalui CLI
---

### Persiapan
Pasang termux terlebih dahulu pada android.
```bash
https://play.google.com/store/apps/details?id=com.termux
```

### Instalasi Proot module pada Termux
```bash
pkg install proot
```

### Instalasi Ubuntu pada Proot
```bash
pkg install proot-distro
proot-distro install ubuntu-20.04
```

### Masuk pada sistem Ubuntu
```bash
proot-distro login ubuntu-20.04
```

---
<h4> REFERENSI</h4> <br/>
<a href="https://termux.com/">https://termux.com/</a><br/>
<a href="https://wiki.termux.com/wiki/PRoot">https://wiki.termux.com/wiki/PRoot</a>