---
layout: post
---

Merubah codec menjadi 48K, lakukan :

```
ffmpeg -y -i input_file.mp4 -c:v libx264 -c:a aac -strict experimental -tune fastdecode -pix_fmt yuv420p -b:a 192k -ar 48000 output_file.mp4
```
>Ubah input_file.mp4 dengan nama file video yang akan diubah.

>Ubah output_file.mp4 dengan nama hasil conversi