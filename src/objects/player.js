const initalConfig = {
  moveSpeed: 150
}

const config = {
  moveSpeed: initalConfig.moveSpeed,
  jumpForce: 400,
  isAttacking: false
}

const playerActions = (player) => {
  onUpdate('player', (player) => {
    camPos(player.pos)

    if (player.falling() && !player.isGrounded() && !config.isAttacking) player.play('fall')
  })

  player.onGround(() => {
    if (!isKeyDown('left') && !isKeyDown('right') && !config.isAttacking) player.play('idle')
    else player.play('run')
  })

  const canPlayRunAnimation = () => player.isGrounded() && player.curAnim() !== 'run' && !config.isAttacking

  onKeyDown('left', () => {
    player.move(-config.moveSpeed, 0)
    player.flipX(true)

    if (canPlayRunAnimation()) player.play('run')
  })

  onKeyDown('right', () => {
    player.move(config.moveSpeed, 0)
    player.flipX(false)

    if (canPlayRunAnimation()) player.play('run')
  })

  onKeyRelease(['left', 'right'], () => {
    if (player.isGrounded() && !isKeyDown('left') && !isKeyDown('right') && !config.isAttacking) player.play('idle')
  })

  onKeyDown('x', () => {
    if (player.isGrounded()) {
      player.play('jump')
      player.jump(config.jumpForce)
    }
  })

  onKeyDown('z', () => {
    if (isKeyDown('left') || isKeyDown('right')) {
      config.moveSpeed = 400
      player.animSpeed = 3
    }
  })

  onKeyRelease('z', () => {
    config.moveSpeed = initalConfig.moveSpeed
    player.animSpeed = 1
  })

  onKeyPress("c", () => {
    config.isAttacking = true
    player.play('attack', {
      onEnd: () => {
        /* console.log({player})
        console.log('player.curAnim()', player.curAnim()) */
        config.isAttacking = false
        player.play("idle")
      }
    })
  })
}

const playerGetCoin = (player, incrementCoins) => {
  player.onCollide('coin', (obj) => {
    obj.destroy()
    incrementCoins()
  })
}

const player = (incrementCoins = () => {}) => {
  const playerObj = add([
    sprite('hero'),
    pos(100, 0),
    area(),
    body(),
    'player'
  ])

  playerObj.play('idle')

  playerActions(playerObj)
  playerGetCoin(playerObj, incrementCoins)
}

export default player
