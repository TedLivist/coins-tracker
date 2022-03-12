import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../../redux/users/users';

const Login = () => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(authUser(username))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='username' value={username} onChange={handleUsername} required />
      <button type='submit'>Log in</button>
    </form>
  );
}
 
export default Login;