---
layout: post
author: Rahmat Agung Julians
image: Algoritma
comments: false
featured: true
title: Penerapan Algoritma Transposisi pada Python
description: Algoritma Transposisi menggunakan python
keywords: python, algoritma, transposisi
---

### 1. Metode Enkripsi

Membuat Variabel pesan untuk menyimpan pesan yang akan dimanipulasi.

```python
pesan = 'halo ini adalah contoh pesan'
```

```python
result = []
```

```python
step = 5
```

Membuat step sebagai rotor pergerakan dan perpindahakn setiap huruf.

```python
for i in pesan:
    numchar = ord(i)
    result.append(chr(numchar+step))
```

```python
result = ''.join(result)
```

```python
print(result)
```

Ini adalah hasil dari manipulasi pesan.

> mfqt%nsn%fifqfm%htsytm%ujxfs

### 2. Metode Dekripsi

```python
resultDecrypt = []
```

```python
for j in result:
    numchar = ord(j)
    resultDecrypt.append(chr(numchar-step))
```

```python
resultDecrypt = ''.join(resultDecrypt)
```

```python
print(resultDecrypt)
```

Ini adalah hasil penerjemahan dari pesan yang diamankan.

> halo ini adalah contoh pesan

<h4><b class="title-referensi">Referensi</b></h4> 
--- 
<ol class="referensi">
    <li>
        <a href="https://en.wikipedia.org/wiki/Transposition_cipher">https://en.wikipedia.org/wiki/Transposition_cipher</a>
    </li>
    <li>
        <a href="http://www.asciitable.com/">http://www.asciitable.com/</a>
    </li>
</ol>
