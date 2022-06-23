const initalConfig = {
    moveSpeed: 150
}

const config = {
    moveSpeed: initalConfig.moveSpeed,
    jumpForce: 400
}

const playerMovment = (player) => {
    onUpdate("player", (player) => {
        camPos(player.pos)

        if(player.falling() && !player.isGrounded()) player.play("fall")
    })

    player.onGround(() => {
        if(!isKeyDown("left") && !isKeyDown("right")) player.play("idle")
        else player.play("run")
    })

    onKeyDown("left", () => {
        player.move(-config.moveSpeed, 0)
        player.flipX(true)

        if(player.isGrounded() && player.curAnim() !== "run") player.play("run")
    })

    onKeyDown("right", () => {
        player.move(config.moveSpeed, 0)
        player.flipX(false)

        if(player.isGrounded() && player.curAnim() !== "run") player.play("run")
        
    })

    onKeyRelease(["left", "right"], () => {
        if(player.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) player.play("idle")
        
    })

    onKeyDown("x", () => {
        if(player.isGrounded()){
            player.play("jump")
            player.jump(config.jumpForce)
        }
    })

    onKeyDown("z", () => {
        if(isKeyDown("left") || isKeyDown("right")){
            config.moveSpeed = 400
            player.animSpeed = 3
        }
    })

    onKeyRelease("z", () => {
        config.moveSpeed = initalConfig.moveSpeed
        player.animSpeed = 1
    })
}

const playerGetCoin = (player, incrementCoins) => {
    player.onCollide("coin", (obj) => {
        obj.destroy()
        incrementCoins()
    })
}

const player = (incrementCoins = () => {}) => {
    const playerObj = add([
        sprite("hero"),
        pos(100, 0),
        area(),
        body(),
        "player"
    ])

    playerObj.play("idle")

    playerMovment(playerObj)
    playerGetCoin(playerObj, incrementCoins)
}

export default player