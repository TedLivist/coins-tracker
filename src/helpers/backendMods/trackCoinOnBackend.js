export const trackCoinOnBackend = async (coinId, quantity, userToken) => {
  const response =  await fetch(`https://coins-tracker.onrender.com/api/v1/coins`, {
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