import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import coinsReducer from './coins/coins';

const reducer = combineReducers({
  coinsReducer
})

const middleware = [logger, thunk]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;