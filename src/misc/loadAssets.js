import grassTopLeft from '../assets/terrain/grass/topLeft.jpg'
import grassTopMiddle from '../assets/terrain/grass/topMiddle.jpg'
import grassTopRight from '../assets/terrain/grass/topRight.jpg'
import grassBottomLeft from '../assets/terrain/grass/bottomLeft.jpg'
import grassBottomMiddle from '../assets/terrain/grass/bottomMiddle.jpg'
import grassBottomRight from '../assets/terrain/grass/bottomRight.jpg'
import heroAtlas from '../assets/newHeroAtlas0.png'
import coinAtlas from '../assets/coinAtlas.png'
import collectedAtlas from '../assets/collectedAtlas.png'
import bg0 from '../assets/bg0.png'

const loadAssets = () => {
  loadSprite('grassTopLeft', grassTopLeft)
  loadSprite('grassTopMiddle', grassTopMiddle)
  loadSprite('grassTopRight', grassTopRight)
  loadSprite('grassBottomLeft', grassBottomLeft)
  loadSprite('grassBottomMiddle', grassBottomMiddle)
  loadSprite('grassBottomRight', grassBottomRight)
  loadSprite('bg0', bg0)

  loadSpriteAtlas(heroAtlas, {
    hero: {
      x: 0,
      y: 0,
      width: 1568,
      height: 32,
      sliceX: 49,
      anims: {
        idle: {
          from: 14,
          to: 24,
          speed: 20,
          loop: true
        },
        run: {
          from: 24,
          to: 36,
          speed: 20,
          loop: true
        },
        jump: {
          from: 25,
          to: 25,
          speed: 1,
          loop: false
        },
        fall: {
          from: 6,
          to: 6,
          speed: 1,
          loop: false
        },
        attack: {
          from: 43,
          to: 48,
          speed: 20,
          loop: false
        },
        hit: 8
      }
    }
  })

  loadSpriteAtlas(coinAtlas, {
    coin: {
      x: 0,
      y: 0,
      width: 544,
      height: 32,
      sliceX: 17,
      anims: {
        idle: {
          from: 0,
          to: 16,
          speed: 30,
          loop: true
        },
        hit: 8
      }
    }
  })

  loadSpriteAtlas(collectedAtlas, {
    collected: {
      x: 0,
      y: 0,
      width: 192,
      height: 32,
      sliceX: 6,
      anims: {
        default: {
          from: 0,
          to: 5,
          speed: 20,
          loop: false
        },
        hit: 8
      }
    }
  })
}

export default loadAssets
