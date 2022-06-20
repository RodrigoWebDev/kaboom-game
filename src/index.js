import kaboom from "kaboom"

// Objects
import player from "./objects/player"

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
    gravity(2000)
    camScale(2)
    addLevel(levels[levelId ?? 0], levelConfig(vec2))
    player()
})

start()