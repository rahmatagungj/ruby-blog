---
layout: post
author: Rahmat Agung Julians
image: codec
comments: false
title: Konversi Codec Kazam Untuk Android
description: Merubah codec dari video kazam
---

Merubah codec menjadi 48K, lakukan :

```
ffmpeg -y -i input_file.mp4 -c:v libx264 -c:a aac -strict experimental -tune fastdecode -pix_fmt yuv420p -b:a 192k -ar 48000 output_file.mp4
```
>Ubah input_file.mp4 dengan nama file video yang akan diubah.

>Ubah output_file.mp4 dengan nama hasil conversi

---
{: data-content=" referensi "}

<a href="https://launchpad.net/kazam">https://launchpad.net/kazam</a>