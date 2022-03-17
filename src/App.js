import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { useEffect } from 'react';
import { authenticateUser } from './redux/users/users';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'))
  
    dispatch(authenticateUser(user))
  })

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="coins" element={<Coins />} />

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
