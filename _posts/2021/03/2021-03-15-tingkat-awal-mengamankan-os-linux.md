---
layout: post
author: Rahmat Agung Julians
image: Linux
comments: false
title: Tingkat Awal Mengamankan OS Linux
description: Mengatur parameter untuk pengamanan linux
---

### Persiapan 
```
sudo apt update
sudo apt install fail2ban
```

#### Memeriksa Persiapan
```
ufw
sudo systemctl status fail2ban
```

### Setting Parameter untuk Pengamanan
Lakukan perintah ini pada terminal.

#### 1. UFW rules
```
sudo ufw limit 22/tcp  
sudo ufw allow 80/tcp  
sudo ufw allow 443/tcp  
sudo ufw default deny incoming  
sudo ufw default allow outgoing
sudo ufw enable
```
#### 2. Harden /etc/sysctl.conf
```
sudo sysctl kernel.modules_disabled=1
sudo sysctl -a
sudo sysctl -A
sudo sysctl mib
sudo sysctl net.ipv4.conf.all.rp_filter
sudo sysctl -a --pattern 'net.ipv4.conf.(eth|wlan)0.arp'
```

#### 3. PREVENT IP SPOOFS
```
sudo su
cat <<EOF > /etc/host.conf
order bind,hosts
multi on
EOF
exit
```

#### 4. Mengaktifkan fail2ban
```
sudo cp fail2ban.local /etc/fail2ban/
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```
