import kaboom from "kaboom"
import grassTopLeft from "./assets/grassTopLeft.jpg"
import ninjaFrog from "./assets/ninjaFrog/jump.png"

kaboom()
loadSprite('grassTopLeft', grassTopLeft)
loadSprite('ninjaFrog', ninjaFrog)

const player = {
    moveSpeed: 240,
    jumpForce: 600
}

const levels = [
	[
		"         ",
		"         ",
		"         ",
		"         ",
		"         ",
		"         ",
		"         ",
		"         ",
		"         ",
		"                              =========",
		"         ",
		"         ",
		"=========          =========",
        "=========",
        "=========",
	],
]

const levelConfig = {
    width: 16,
    height: 16,
    pos: vec2(100, 200),
    "=": () => [
        sprite("grassTopLeft"),
        area(),
        solid(),
        origin("bot")
    ]
}

const start = () => {
    go("game", {
        levelId: 0,
		coins: 0,
    })
}

const playerMechanics = () => {
    const playerObj = add([
        sprite("ninjaFrog"),
        pos(100, 0),
        area(),
        body()
    ])

    playerObj.onUpdate(() => {
        camPos(playerObj.pos)
    })

    onKeyDown("left", () => {
        playerObj.move(-player.moveSpeed, 0)
    })

    onKeyDown("right", () => {
        playerObj.move(player.moveSpeed, 0)
    })

    onKeyDown("space", () => {
        if(playerObj.isGrounded()){
            playerObj.jump(player.jumpForce)
        }
    })
}

scene("game", ({ levelId = 0, coins = 0 }) => {
    gravity(2000)
    camScale(2)
    addLevel(levels[levelId ?? 0], levelConfig)
    playerMechanics()
})

start()