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
```bash
sudo apt update
```

### 2. Install Software Pendukung
```bash
sudo apt install software-properties-common
```

### 3. Menambahkan Deadsnakes PPA
```bash
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
```

### 4. Install Python 3
```bash
sudo apt install python3
python3 -V
```

### 5. Memasang PIP3 Pada Python 3
```bash
sudo apt update
sudo apt install python3-pip
pip3 --version
```

---
<h4> REFERENSI</h4> <br/>
<a href="https://phoenixnap.com/kb/how-to-install-python-3-ubuntu">https://phoenixnap.com/kb/how-to-install-python-3-ubuntu</a>