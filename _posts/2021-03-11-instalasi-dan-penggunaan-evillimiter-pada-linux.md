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
```
git clone https://github.com/bitbrute/evillimiter.git
cd evillimiter
sudo python3 setup.py install
```

### Penggunaan
Lakukan perintah ini pada terminal :
1. Memanggil Evillimiter
```
sudo evillimiter
```
> Pastikan memanggil evillimiter sebagai root
2. Mencari seluruh pengguna dalam jaringan
```
scan
```
3. Melihat daftar pengguna 
```
hosts
```
setelah menjalankan perintah diatas maka akan ada beberapa pengguna aktif, pilihlah alamat IP yang akan ditutup berdasarkan ID.
<pre>┌Hosts─────────────────┬───────────────────┬──────────┬────────┐
│ <b>ID</b> │ <b>IP address</b>      │ <b>MAC address</b>       │ <b>Hostname</b> │ <b>Status</b> │
├────┼─────────────────┼───────────────────┼──────────┼────────┤
│ 0  │ 192.168.100.1   │ 28:41:c6:98sensor │ _gateway │ Free   │
│ 1  │ 192.168.100.6   │ 00:0a:00:56sensor │          │ Free   │
│ 2  │ 192.168.100.9   │ 20:5e:f7:59sensor │          │ Free   │
│ 3  │ 192.168.100.96  │ c0:87:eb:ddsensor │          │ Free   │
│ 4  │ 192.168.100.106 │ 50:02:91:11sensor │          │ Free   │
│ 5  │ 192.168.100.117 │ 00:27:15:29sensor │          │ Free   │
└────┴─────────────────┴───────────────────┴──────────┴────────┘
</pre>
Disini saya memilih ID 4. maka :

4. Menutup akses wifi pengguna
```
block 4
```
5. Membuka akses wifi pengguna
```
free 4
```

ketik `exit` untuk mengakhiri program.


---
{: data-content=" referensi "}

<a href="https://github.com/bitbrute/evillimiter"> https://github.com/bitbrute/evillimiter</a>