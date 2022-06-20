const config = {
    moveSpeed: 240,
    jumpForce: 600
}

const player = () => {
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
        playerObj.move(-config.moveSpeed, 0)
        playerObj.flipX(true)

        if (playerObj.isGrounded() && playerObj.curAnim() !== "run") {
            playerObj.play("run")
        }
    })

    onKeyDown("right", () => {
        playerObj.move(config.moveSpeed, 0)
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
            playerObj.jump(config.jumpForce)
        }
    })
}

export default player