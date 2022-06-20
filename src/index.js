import kaboom from "kaboom"
import grassTopLeft from "./assets/terrain/grass/topLeft.jpg"
import grassTopMiddle from "./assets/terrain/grass/topMiddle.jpg"
import grassTopRight from "./assets/terrain/grass/topRight.jpg"
import grassBottomLeft from "./assets/terrain/grass/bottomLeft.jpg"
import grassBottomMiddle from "./assets/terrain/grass/bottomMiddle.jpg"
import grassBottomRight from "./assets/terrain/grass/bottomRight.jpg"
import heroAtlas from "./assets/heroAtlas.png"

kaboom()
loadSprite('grassTopLeft', grassTopLeft)
loadSprite('grassTopMiddle', grassTopMiddle)
loadSprite('grassTopRight', grassTopRight)
loadSprite('grassBottomLeft', grassBottomLeft)
loadSprite('grassBottomMiddle', grassBottomMiddle)
loadSprite('grassBottomRight', grassBottomRight)

loadSpriteAtlas(heroAtlas, {
    "hero": {
        "x": 0,
		"y": 0,
		"width": 1376,
		"height": 32,
		"sliceX": 43,
        "anims": {
			"idle": {
				"from": 14,
				"to": 24,
				"speed": 20,
				"loop": true
			},
			"run": {
				"from": 24,
				"to": 36,
				"speed": 20,
				"loop": true
			},
            "jump": {
				"from": 25,
				"to": 25,
				"speed": 1,
				"loop": false
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
        sprite("hero"),
        pos(100, 0),
        area(),
        body()
    ])

    playerObj.play("idle")

    playerObj.onUpdate(() => {
        camPos(playerObj.pos)
    })

    playerObj.onGround(() => {
        if (!isKeyDown("left") && !isKeyDown("right")) {
            playerObj.play("idle")
        } else {
            playerObj.play("run")
        }
    })

    onKeyDown("left", () => {
        playerObj.move(-player.moveSpeed, 0)
        playerObj.flipX(true)

        if (playerObj.isGrounded() && playerObj.curAnim() !== "run") {
            playerObj.play("run")
        }
    })

    onKeyDown("right", () => {
        playerObj.move(player.moveSpeed, 0)
        playerObj.flipX(false)

        if (playerObj.isGrounded() && playerObj.curAnim() !== "run") {
            playerObj.play("run")
        }
    })

    onKeyRelease(["left", "right"], () => {
        if (playerObj.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) {
            playerObj.play("idle")
        }
    })

    onKeyDown("space", () => {
        if(playerObj.isGrounded()){
            playerObj.play("jump")
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