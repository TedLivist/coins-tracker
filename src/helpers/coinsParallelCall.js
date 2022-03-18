import { getCoin } from "./getCoin"

export const coinsParallelCall = async (backendCoins) => {
  console.log(backendCoins)

  const coinsPromises = []
  for (let i = 0; i < backendCoins.length; i++) {
    const coinId = backendCoins[i].coin_id
    const { backendId, qty } = backendCoins[i]
    const coin = await getCoin(coinId)
    coinsPromises.push({...coin, backendId, qty})
  }

  const data = await Promise.all(coinsPromises)
  return data

}