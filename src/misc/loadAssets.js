import grassTopLeft from "../assets/terrain/grass/topLeft.jpg"
import grassTopMiddle from "../assets/terrain/grass/topMiddle.jpg"
import grassTopRight from "../assets/terrain/grass/topRight.jpg"
import grassBottomLeft from "../assets/terrain/grass/bottomLeft.jpg"
import grassBottomMiddle from "../assets/terrain/grass/bottomMiddle.jpg"
import grassBottomRight from "../assets/terrain/grass/bottomRight.jpg"
import heroAtlas from "../assets/heroAtlas.png"


const loadAssets = () => {
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
                "fall": {
                    "from": 6,
                    "to": 6,
                    "speed": 1,
                    "loop": false
                },
                "hit": 8
            }
        }
    })
}

export default loadAssets