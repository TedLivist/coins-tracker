export const fetchUserCoins = async (token) => {
  const response = await fetch('http://localhost:3000/api/v1/coins', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    redirect: 'follow'
  })

  const data = await response.json()
  const filteredData = data.map((datum) => (
    {
      id: datum.id,
      coin_id: datum.coin_id,
      qty: datum.quantity
    }
  ))

  console.log(filteredData)

}