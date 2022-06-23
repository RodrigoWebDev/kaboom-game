import kaboom from 'kaboom'

// Objects
import player from './objects/player'
import coinsLabel from './objects/coinsLabel'
import bg0 from './objects/bg0'

// Misc
import loadAssets from './misc/loadAssets'
import { levels, levelConfig } from './misc/levels'

kaboom()
loadAssets()

const start = () => {
  go('game', {
    levelId: 0,
    coins: 0
  })
}

scene('game', ({ levelId = 0, coins = 0 }) => {
  const getPlayer = () => get('player')[0]

  const spawnCollectSomethingAnimation = () => {
    const x = getPlayer().pos.x + 32
    const y = getPlayer().pos.y

    const collected = add([
      sprite('collected'),
      pos(x, y)
    ])

    collected.play('default', {
      onEnd: () => collected.destroy()
    })
  }

  const incrementCoins = () => {
    coins += 1
    get('coinsLabel')[0].text = `Coins: ${coins}`
    spawnCollectSomethingAnimation()
  }

  gravity(800)
  camScale(2)
  addLevel(levels[levelId ?? 0], levelConfig(vec2))
  bg0()
  player(incrementCoins, coins)
  coinsLabel()
})

start()
