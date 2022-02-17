const TRACK_COIN = 'coinsTracker/coins/TRACK_COIN';
const UNTRACK_COIN = 'coinsTracker/coins/UNTRACK_COIN';
const CHANGEQUANTITY = 'coinsTracker/coins/CHANGEQUANTITY';

const initialState = [];

export const trackCoin = payload => ({
  type: TRACK_COIN,
  payload,
})

export const untrackCoin = payload => ({
  type: UNTRACK_COIN,
  payload,
})

export const changeQuantity = payload => ({
  type: CHANGEQUANTITY,
  payload,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACK_COIN:
      return [
        action.payload,
        ...state,
      ]
    case UNTRACK_COIN:
      return state.filter((coin) => coin.id !== action.payload)
    case CHANGEQUANTITY:
      return state.map((coin) => {
          if (coin.id !== action.payload.id) {
            return { ...coin };
          }
          return { ...coin, qty: action.payload.qty };
        })
    default:
      return state
  }
}

export default reducer;