import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../redux/users/users';

const Signup = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [error, setError] = useState([])

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const checkStatus = await dispatch(signupUser(username))

    if (checkStatus === 'loggedIn') {
      return (
        navigate('/')
      )
    } else {
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
