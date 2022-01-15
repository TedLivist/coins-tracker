const TRACK_COIN = 'coinsTracker/coins/TRACK_COIN';

const initialState = [];

export const trackCoin = payload => ({
  type: TRACK_COIN,
  payload
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACK_COIN:
      return [
        action.payload,
        ...state,
      ]
    default:
      return state
  }
}

export default reducer;