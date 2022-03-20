export const untrackCoinOnBackend = async (userToken, coinId) => {
  const response = await fetch(`http://localhost:3000/api/v1/coins/${coinId}`, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${userToken}`
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })

  const deleteMessage = await response.json()
  return deleteMessage
}