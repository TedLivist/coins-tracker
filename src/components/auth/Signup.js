import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../redux/users/users';

const Signup = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [error, setError] = useState([])

  const users = useSelector(state => state.users)
  useEffect(() => {
    if (users.user) {
      const { user: {token, user} } = users
      localStorage.setItem('loggedInUser', JSON.stringify({token, username: user.username}))

      return (
        navigate('/')
      )
    }
  })

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const checkStatus = await dispatch(signupUser(username))

    if (checkStatus !== 'signedUp') {
      setError(checkStatus)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error.map((err) => (
        <p key={err}>{err}</p>
      ))}
      <input type="text" name='username' value={username} onChange={handleUsername} required />
      <button type='submit'>Sign up</button>
    </form>
  );
}
 
export default Signup;
