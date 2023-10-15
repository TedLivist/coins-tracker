import { coinsParallelCall } from "./coinsParallelCall"

export const fetchUserCoins = async (token) => {
  const response = await fetch('https://coins-tracker.onrender.com/api/v1/coins', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    redirect: 'follow'
  })

  const data = await response.json()

  if (data.length !== 0) {
    const filteredData = data.map((datum) => (
      {
        backendId: datum.id,
        coin_id: datum.coin_id,
        qty: datum.quantity
      }
    ))
  
    const fetchedCoins = await coinsParallelCall(filteredData)
    return fetchedCoins
  }

}