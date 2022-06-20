export const levelConfig = (vec2) => ({
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
})

export const levels = [
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