export const auth = async (authType, username) => {
  let url = ''
  if (authType === 'login') {
    url = 'https://coins-tracker.onrender.com/api/v1/login'
  } else if (authType === 'signup') {
    url = 'https://coins-tracker.onrender.com/api/v1/users'
  }
  console.log(username)
  const response = await fetch(url, {
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
  return data
}