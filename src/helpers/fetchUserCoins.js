export const fetchUserCoins = async (token) => {
  console.log('Aboki is inside')
  console.log(token)

  const response = await fetch('http://localhost:3000/api/v1/coins', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    redirect: 'follow'
  })

  const data = await response.json()
  console.log(data)
}