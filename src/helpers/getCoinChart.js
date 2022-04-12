import { unixTimeConverter } from "./unixTimeConverter"

export const getCoinChart = async (coinId, vsCurrency, days) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${vsCurrency}&days=${days}`)
  const data = await response.json()

  let someValues = []
  const dataArray = data.prices
  if (days == 1) {
    someValues = dataArray.filter((item) => (dataArray.indexOf(item) % 12) == 0)
  }

  // const dataArray = data.prices.slice(-20)
  const prices = someValues.map((arr) => {
    return Number(arr[1].toFixed(3))
  })
  const timeStamps = someValues.map((arr) => {
    return unixTimeConverter(arr[0])
  })

  return {timeStamps, prices}
}