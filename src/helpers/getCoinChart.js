export const getCoinChart = async (coinId, vsCurrency, days) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${vsCurrency}&days=${days}`)
  const data = await response.json()
  const dataArray = data.prices.slice(-15)
  const prices = dataArray.map((arr) => {
    return Number(arr[1].toFixed(3))
  })
  console.log(prices)
  return prices
}