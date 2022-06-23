import kaboom from "kaboom"

// Objects
import player from "./objects/player"
import bg from "./objects/bg"
import coinsLabel from "./objects/coinsLabel"

// Misc
import loadAssets from "./misc/loadAssets"
import { levels, levelConfig } from './misc/levels'

kaboom()
loadAssets()

const start = () => {
    go("game", {
        levelId: 0,
		coins: 0,
    })
}

scene("game", ({ levelId = 0, coins = 0 }) => {
    const incrementCoins = () => {
        coins += 1
        get("coinsLabel")[0].text = `Coins: ${coins}`
    }

    gravity(800)
    camScale(2)
    addLevel(levels[levelId ?? 0], levelConfig(vec2))
    // bg()
    player(incrementCoins, coins)
    coinsLabel()
})

start()