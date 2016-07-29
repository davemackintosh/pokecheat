# Pokecheat

Uses Electron to open a map, all using a new Google API key. Once the quota is up, it's up. Create one of your own.

Only works on OSX. Your device needs to remain plugged in.

```bash
git clone https://github.com/davemackintosh/pokecheat.git
cd pokecheat
npm install
open pokecheat.xcodeproj
Run on device and minimise on device, open Pokemon go.
node_modules/.bin/electron .
```

Once the app starts, it'll ask you to save a `.gpx` somewhere, this will need referencing in xCode.

**DO NOT "COPY" THE .GPX TO THE PROJECT**

Once you have your app running in xCode and PokemonGO running

1. Click Debug in the top menu
2. Click "Simulate Location"
3. Click `{name you saved your gpx as}.gpx`
4. Run the `clicker.scpt` which will keep your phone up to date with the new simulated location.

Click on the map and watch your character magically appear there.

### IF YOU GO MAD WITH THIS, YOUR ACCOUNT WILL GET BLOCKED BY THE POKEMON GO SERVERS.
### I CANNOT FIX THAT, YOU SHOULD HAVE BEEN CAREFUL WITH YOUR FUN SPOILING.

Peace out. ✌🏻
Dave
