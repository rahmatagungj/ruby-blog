---
layout: post
author: Rahmat Agung Julians
image: Ubuntu
comments: false
title: Instalasi Git pada Ubuntu Desktop
description: Cara pemasangan Git pada linux via terminal
---

### Install GIT 
Lakukan perintah ini pada terminal.
```
sudo apt update
sudo apt-get install git
```

### Konfigurasi GIT
```
git config --global user.name "letakan_username_disini"
git config --global user.email "letakan_email_disini"
git config --global credential.helper store
```

---
{: data-content=" referensi "}
<a href="https://stackoverflow.com/questions/35942754/how-to-save-username-and-password-in-git">https://stackoverflow.com/questions/35942754/how-to-save-username-and-password-in-git</a> <br/>
<a href="https://gist.github.com/derhuerst/1b15ff4652a867391f03">https://gist.github.com/derhuerst/1b15ff4652a867391f03</a>