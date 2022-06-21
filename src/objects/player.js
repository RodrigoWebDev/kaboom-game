const initalConfig = {
    moveSpeed: 150
}

const config = {
    moveSpeed: initalConfig.moveSpeed,
    jumpForce: 400
}

const player = () => {
    const playerObj = add([
        sprite("hero"),
        pos(100, 0),
        area(),
        body(),
        "player"
    ])

    playerObj.play("idle")

    onUpdate("player", (player) => {
        camPos(playerObj.pos)

        if(player.falling() && !player.isGrounded()) playerObj.play("fall")
    })

    playerObj.onGround(() => {
        if(!isKeyDown("left") && !isKeyDown("right")) playerObj.play("idle")
        else playerObj.play("run")
    })

    onKeyDown("left", () => {
        playerObj.move(-config.moveSpeed, 0)
        playerObj.flipX(true)

        if(playerObj.isGrounded() && playerObj.curAnim() !== "run") playerObj.play("run")
    })

    onKeyDown("right", () => {
        playerObj.move(config.moveSpeed, 0)
        playerObj.flipX(false)

        if(playerObj.isGrounded() && playerObj.curAnim() !== "run") playerObj.play("run")
        
    })

    onKeyRelease(["left", "right"], () => {
        if(playerObj.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) playerObj.play("idle")
        
    })

    onKeyDown("x", () => {
        if(playerObj.isGrounded()){
            playerObj.play("jump")
            playerObj.jump(config.jumpForce)
        }
    })

    onKeyDown("z", () => {
        if(isKeyDown("left") || isKeyDown("right")){
            config.moveSpeed = 400
            playerObj.animSpeed = 3
        }
    })

    onKeyRelease("z", () => {
        config.moveSpeed = initalConfig.moveSpeed
        playerObj.animSpeed = 1
    })
}

export default player