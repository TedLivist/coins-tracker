import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/users/users';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch() 
 
  const [username, setUsername] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const checkStatus = await dispatch(loginUser(username))

    if (checkStatus === 'loggedIn') {
      return (
        navigate('/')
      )
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='username' value={username} onChange={handleUsername} required />
      <button type='submit'>Log in</button>
    </form>
  );
}
 
export default Login;
