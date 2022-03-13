import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/users/users';

const Signup = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(signupUser(username))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='username' value={username} onChange={handleUsername} required />
      <button type='submit'>Sign up</button>
    </form>
  );
}
 
export default Signup;
