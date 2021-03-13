---
layout: post
author: Rahmat Agung Julians
image: python
comments: false
title: Instalasi Python Pada Linux
description: Cara install python pada Linux
---

Hal ini dapat dilakukan jika pada sistem bawaan linux tidak terdapat python.

### 1. Update List Repository
```
sudo apt update
```

### 2. Install Software Pendukung
```
sudo apt install software-properties-common
```

### 3. Menambahkan Deadsnakes PPA
```
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
```

### 4. Install Python 3
```
sudo apt install python3
python3 -V
```

### 5. Memasang PIP3 Pada Python 3
```
sudo apt update
sudo apt install python3-pip
pip3 --version
```

---
{: data-content=" referensi "}

<a href="https://www.python.org/download/releases/3.0/">https://www.python.org/download/releases/3.0/</a>