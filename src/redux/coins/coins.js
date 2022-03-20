const ADD_COINS = 'coinsTracker/coins/ADD_COINS'
const TRACK_COIN = 'coinsTracker/coins/TRACK_COIN';
const UNTRACK_COIN = 'coinsTracker/coins/UNTRACK_COIN';
const CHANGE_QUANTITY = 'coinsTracker/coins/CHANGE_QUANTITY';
const CLEAR_COINS = 'coinsTracker/coins/CLEAR_COINS';


const initialState = [];

export const addCoins = payload => ({
  type: ADD_COINS,
  payload
})

export const trackCoin = payload => ({
  type: TRACK_COIN,
  payload,
})

export const untrackCoin = payload => ({
  type: UNTRACK_COIN,
  payload,
})

export const changeQuantity = payload => ({
  type: CHANGE_QUANTITY,
  payload,
})

export const clearCoins = payload => ({
  type: CLEAR_COINS,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COINS:
      return [
        ...state,
        ...action.payload
      ]
    case TRACK_COIN:
      return [
        action.payload,
        ...state,
      ]
    case UNTRACK_COIN:
      return state.filter((coin) => coin.id !== action.payload)
    case CHANGE_QUANTITY:
      return state.map((coin) => {
          if (coin.id !== action.payload.id) {
            return { ...coin };
          }
          return { ...coin, qty: action.payload.qty };
        })
    case CLEAR_COINS:
      state = initialState
    default:
      return state
  }
}

export default reducer;