import React, { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='username' value={username} onChange={handleUsername} required />
      <button type='submit'>Log in</button>
    </form>
  );
}
 
export default Login;