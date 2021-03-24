import requests

css_file = "assets/css/style.dev.css"

# Grab the file contents
with open(css_file, 'r') as c:
    css = c.read()

# Pack it, ship it    
payload = {'input': css}
url = 'https://cssminifier.com/raw'
print("Requesting mini-me of {}. . .".format(c.name))
r = requests.post(url, payload)

# Write out minified version
minified = 'assets/css/style.min.css'
with open(minified, 'w') as m:
    m.write(r.text)

print("CSS Minification complete. See {}".format(m.name))