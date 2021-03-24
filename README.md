# Rahmat Agung Julians - Notes

[![Build and Deploy](https://github.com/rahmatagungj/rahmatagungj.github.io/actions/workflows/build-jekyll.yml/badge.svg?branch=main)](https://github.com/rahmatagungj/rahmatagungj.github.io/actions/workflows/build-jekyll.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/ec1c69b3-1571-4718-a8b4-d0acbfa91ea0/deploy-status)](https://app.netlify.com/sites/rahmatagungjulians/deploys)

This repo is the source code that runs rahmatagungjulians.tech, go check it out. <br/>
This site is built with Jekyll and hosted on Netlify.
## DEVELOPMENT
### Requirements 
<ul>
    <li>Python 3</li>
    <li>Ruby 2.7 or higher</li>
</ul>

### Getting set up locally
```bash
git clone https://github.com/rahmatagungj/rahmatagungj.tech 
cd rahmatagungjulians.tech
bundle install
```

### Testing
```bash
cd build && python3 run_dev.py
```
or
```
cd build && python3 run.py
```
### Just for manify resource
```bash
cd build && python3 minifier.py
```

### Deploy to Production
```bash
cd build && python3 build.py
```

## BUILD AND DEPLOYS
1. Push all files into main repository
2. Run deploy actions (visit this link)
```html
https://github.com/rahmatagungj/rahmatagungj.tech/actions/workflows/build-jekyll.yml
```
