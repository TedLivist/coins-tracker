import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import coinsReducer from './coins/coins';
import usersReducer from './users/users';

const reducer = combineReducers({
  coins: coinsReducer,
  users: usersReducer
})

const middleware = [logger, thunk]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;