const getCoin = async (coinId) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  const data = await response.json()
  return data
}

export default getCoin;