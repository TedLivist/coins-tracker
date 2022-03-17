import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'))
    if (user !== null) {
      console.log(user)
    } else {
      return (
        navigate('/')
      )
    }
  }, [navigate])

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="coins" element={<Coins />} />

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
