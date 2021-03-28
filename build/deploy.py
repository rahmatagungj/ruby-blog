import os
import build

print("\n== COPYING FILES TO PRODUCTION")
print("Copying all files : _sites/ -> ../production-rahmatagungjulians.tech/")
os.system("cd .. && cp -r _site/* ../production-rahmatagungjulians.tech/")
print("\n==== DEPLOY DONE ====")