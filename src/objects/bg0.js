const bg0 = () => {
    add([
        sprite("bg0", {
            tiled: true,
            width: width(),
            height: height(),
        }),
        pos(width() / 2, height() / 2),
        origin("center"),
        scale(4),
        fixed(),
        z(-1)
    ]);
}

export default bg0