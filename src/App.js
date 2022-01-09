import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import OneCoin from './components/OneCoin';

function App() {
  return (
    <Provider store={store}>
      <OneCoin />
    </Provider>
  );
}

export default App;
