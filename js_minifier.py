import requests

js_file = "assets/js/footer.js"

# Grab the file contents
with open(js_file, 'r') as c:
    js = c.read()

# Pack it, ship it
payload = {'input': js}
url = 'https://javascript-minifier.com/raw'
print("Requesting mini-me of {}. . .".format(c.name))
r = requests.post(url, payload)

# Write out minified version
minified = 'assets/js/footer.min.js'
with open(minified, 'w') as m:
    m.write(r.text)

print("JS Minification complete. See {}".format(m.name))