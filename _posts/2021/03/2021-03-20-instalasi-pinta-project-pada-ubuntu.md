---
layout: post
author: Rahmat Agung Julians
image:
comments: false
title: Instalasi Pinta Project pada Ubuntu
description: Aplikasi menggambar sederhana dan ringan untuk visualisasi
keywords: visualisasi, pinta
---

### Persiapan

#### Menambahkan Mono repository

```bash
sudo apt install gnupg ca-certificates
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb https://download.mono-project.com/repo/ubuntu stable-focal main" | sudo tee /etc/apt/sources.list.d/mono-official-stable.list
sudo apt update
```

### Menambahkan Pinta repository

```bash
sudo add-apt-repository ppa:pinta-maintainers/pinta-stable
sudo apt-get update
```

### Instalasi

```bash
sudo apt-get install pinta
```

<h3 class="title-referensi"><b>Referensi</b></h3> 
--- 
<ol class="referensi">
    <li>
        <a href="https://www.pinta-project.com/howto/installing-pinta">https://www.pinta-project.com/howto/installing-pinta</a>
    </li>
</ol>
