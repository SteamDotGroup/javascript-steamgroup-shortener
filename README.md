# steamgroup-shortener

> Steam group URL shortener

## :package: Install with NPM

Execute install command in a terminal:
```console
npm i steamgroup-shortener
```

## :clipboard: Usage

```javascript
// Import the module 
const shortenSteamGroupURL = require('steamgroup-shortener')

shortenSteamGroupURL.fromURL('https://steamcommunity.com/groups/SteamDotGroup')
// => 'https://steam.group/SteamDotGroup'

shortenSteamGroupURL.fromText('You can find our Steam group here: http://steamcommunity.com/groups/SteamDotGroup have fun!')
// => 'You can find our Steam group here: https://steam.group/SteamDotGroup have fun!'

```