import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from './components/auth/Login';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="coins" element={<Coins />} />

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
