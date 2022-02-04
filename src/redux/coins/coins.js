const TRACK_COIN = 'coinsTracker/coins/TRACK_COIN';
const UNTRACK_COIN = 'coinsTracker/coins/UNTRACK_COIN';

const initialState = [];

export const trackCoin = payload => ({
  type: TRACK_COIN,
  payload,
})

export const untrackCoin = payload => ({
  type: UNTRACK_COIN,
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
      return state.filter((coin) => coin.id != action.payload)
    default:
      return state
  }
}

export default reducer;