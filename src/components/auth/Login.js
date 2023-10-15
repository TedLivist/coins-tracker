import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/users/users';
import {useNavigate} from 'react-router-dom';
import { addCoins } from '../../redux/coins/coins';
import {fetchUserCoins} from '../../helpers/fetchUserCoins';

const Login = () => {

  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [error, setError] = useState([])

  const users = useSelector(state => state.users)

  useEffect(() => {
    const checkAuth = async () => {
      if (users.user) {
        const { user: {token, username} } = users
        localStorage.setItem('loggedInUser', JSON.stringify({token, username}))

        const coins = await fetchUserCoins(token)
        if (coins === undefined) {
          dispatch(addCoins([]))
        } else {
          dispatch(addCoins(coins))
        }

        return (
          navigate('/')
        )
      }
    }

    checkAuth()
  }, [navigate, users, dispatch])

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const checkStatus = await dispatch(loginUser(username))

    if (checkStatus !== 'loggedIn') {
      setError(checkStatus)
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      {error}
      <input type="text" name='username' value={username} onChange={handleUsername} required />
      <button type='submit'>Log in</button>
    </form>
  );
}
 
export default Login;
