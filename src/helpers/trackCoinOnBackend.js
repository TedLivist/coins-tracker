export const trackCoinOnBackend = async (coinId, quantity, userToken) => {
  console.log(coinId, quantity)

  const response =  await fetch(`http://localhost:3000/api/v1/coins`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${userToken}`
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({coin_id: coinId, quantity})
  })

  const data = await response.json()
  return data
}