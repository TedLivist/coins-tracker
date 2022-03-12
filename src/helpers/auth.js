export const auth = async (username) => {
  console.log(username)
  const response = await fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({username}),
  })

  const data = await response.json()
  console.log(data)
  return data
}