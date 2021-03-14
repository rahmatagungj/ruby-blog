---
layout: post
author: Rahmat Agung Julians
image: Algoritma
comments: false
title: Penerapan Algoritma Transposisi pada Python
description: Algoritma Transposisi menggunakan python
---

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
>`mfqt%nsn%fifqfm%htsytm%ujxfs


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

---
{: data-content=" referensi "}

<a href="https://en.wikipedia.org/wiki/Transposition_cipher">https://en.wikipedia.org/wiki/Transposition_cipher</a>
<a href="http://www.asciitable.com/">http://www.asciitable.com/</a>