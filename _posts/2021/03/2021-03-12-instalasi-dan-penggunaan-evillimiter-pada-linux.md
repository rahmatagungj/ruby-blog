---
layout: post
author: Rahmat Agung Julians
image: evillimiter
comments: false
title: Instalasi dan Penggunaan Evillimiter pada Linux
description: Membatas penggunaan jaringan pada wifi dari bandwidth baik unggah ataupun unduh.
---

### Ulasan Singkat
Evillimiter merupakan salah satu alat untuk membatas penggunaan jaringan pada wifi dari bandwidth baik unggah ataupun unduh.

### Instalasi
Lakukan perintah ini pada terminal :
```bash
git clone https://github.com/bitbrute/evillimiter.git
cd evillimiter
sudo python3 setup.py install
```

### Penggunaan
Lakukan perintah ini pada terminal :
1. Memanggil Evillimiter
```bash
sudo evillimiter
```
> Pastikan memanggil evillimiter sebagai root
2. Mencari seluruh pengguna dalam jaringan
```bash
scan
```
3. Melihat daftar pengguna 
```bash
hosts
```
Setelah menjalankan perintah diatas maka akan ada beberapa pengguna aktif, pilihlah alamat IP yang akan ditutup berdasarkan ID.
Disini saya memilih ID 4. maka :

4. Menutup akses wifi pengguna
```bash
block 4
```
5. Membuka akses wifi pengguna
```bash
free 4
```

ketik `exit` untuk mengakhiri program.

