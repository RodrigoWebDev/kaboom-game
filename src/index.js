import kaboom from "kaboom"
import grassTopLeft from "./assets/terrain/grass/topLeft.jpg"
import grassTopMiddle from "./assets/terrain/grass/topMiddle.jpg"
import grassTopRight from "./assets/terrain/grass/topRight.jpg"
import grassBottomLeft from "./assets/terrain/grass/bottomLeft.jpg"
import grassBottomMiddle from "./assets/terrain/grass/bottomMiddle.jpg"
import grassBottomRight from "./assets/terrain/grass/bottomRight.jpg"
import ninjaFrogIdle from "./assets/ninjaFrog/idle.png"

kaboom()
loadSprite('grassTopLeft', grassTopLeft)
loadSprite('grassTopMiddle', grassTopMiddle)
loadSprite('grassTopRight', grassTopRight)
loadSprite('grassBottomLeft', grassBottomLeft)
loadSprite('grassBottomMiddle', grassBottomMiddle)
loadSprite('grassBottomRight', grassBottomRight)

loadSpriteAtlas(ninjaFrogIdle, {
    "hero": {
        "x": 0,
		"y": 0,
		"width": 352,
		"height": 32,
		"sliceX": 11,
        "anims": {
			"idle": {
				"from": 0,
				"to": 10,
				"speed": 20,
				"loop": true
			},
			"run": {
				"from": 4,
				"to": 7,
				"speed": 10,
				"loop": true
			},
			"hit": 8
		}
    }
})

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
		"                              <=======>",
		"                              (-------)",
		"         ",
		"<=======>         <=======>",
        "(-------)         (-------)",
	],
]

const levelConfig = {
    width: 16,
    height: 16,
    pos: vec2(100, 200),
    "<": () => [
        sprite("grassTopLeft"),
        area(),
        solid(),
        origin("bot")
    ],
    "=": () => [
        sprite("grassTopMiddle"),
        area(),
        solid(),
        origin("bot")
    ],
    ">": () => [
        sprite("grassTopRight"),
        area(),
        solid(),
        origin("bot")
    ],
    "(": () => [
        sprite("grassBottomLeft"),
        area(),
        solid(),
        origin("bot")
    ],
    "-": () => [
        sprite("grassBottomMiddle"),
        area(),
        solid(),
        origin("bot")
    ],
    ")": () => [
        sprite("grassBottomRight"),
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
        sprite("hero", {
            anim: "idle"
        }),
        
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