const coinDoesNotExist = (coins, coin) => {
  for (let i = 0; i < coins.length; i++) {
    if (coins[i].id == coin) {
      return false
    }
  }
  return true
}

export default coinDoesNotExist;