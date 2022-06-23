const coinsLabel = (coinsText = 'Coins: 0') => {
  add([
    text(coinsText, {
      size: 44
    }),
    pos(24, 24),
    fixed(),
    'coinsLabel'
  ])
}

export default coinsLabel
