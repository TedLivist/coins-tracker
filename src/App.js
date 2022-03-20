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
import { fetchUserCoins } from './helpers/fetchUserCoins';
import { addCoins } from './redux/coins/coins';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const authAndFetch = async () => {
      const user = JSON.parse(localStorage.getItem('loggedInUser'))

      dispatch(authenticateUser(user))


      if (user !== null) {
        const { token } = user
        const coins = await fetchUserCoins(token)
        dispatch(addCoins(coins))
      }
    }

    authAndFetch()
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
