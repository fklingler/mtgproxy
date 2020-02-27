# [MTG Proxy](https://fklingler.github.io/mtgproxy)

![Build to Github Pages](https://github.com/fklingler/mtgproxy/workflows/Build%20to%20Github%20Pages/badge.svg?branch=master)

[A simple website](https://fklingler.github.io/mtgproxy) to make text proxies of your Magic: The Gathering cards.

It uses the amazing [Scryfall](https://www.scryfall.com) API.
Thanks to [Harubex](https://github.com/Harubex) and its [scryfall](https://github.com/Harubex/scryfall) project for the [types](https://github.com/Harubex/scryfall/tree/master/src).

It is inspired by the [proxygen project by Dryvnt](https://gitlab.com/Dryvnt/proxygen). The card templates are directly adapted from this project.

## Development

`yarn install`  
`yarn dev`

You can then open the dev build on [http://localhost:8080](http://localhost:8080)

## Build

`yarn build`

It is built automatically by Github Actions, so you can always find the master version on [https://fklingler.github.io/mtgproxy](https://fklingler.github.io/mtgproxy).
