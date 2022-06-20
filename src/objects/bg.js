const bg = () => {
    add([
        sprite("bgSprite"),
        pos(width() / 2, height() / 2),
        origin("center"),
        scale(1),
        fixed()
    ])

    /* background.scaleTo(Math.max(
        width() / loadBgSprite.tex.width,
        height() / loadBgSprite.tex.height
    )); */
}

export default bg