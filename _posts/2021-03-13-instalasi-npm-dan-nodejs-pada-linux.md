---
layout: post
---

### Install Node.js dan NPM
```
sudo apt update
sudo apt install nodejs
sudo apt install npm
nodejs -v
```

### Install Node.js melalui NVM
```
sudo apt install wget
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.profile
nvm ls-remote
```
Pilih versi sesuai yang akan dipasang dengan format: 
> nvm install (nomor versi)

#### Memasang versi 10.15.1
```
nvm install 10.15.1
```

#### Memeriksa versi
``` 
node -v 
```