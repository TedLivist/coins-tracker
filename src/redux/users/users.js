import { auth } from "../../helpers/auth";

const AUTHENTICATE_USER = 'coinsTracker/users/AUTHENTICATE_USER';

const initialState = [];

export const authenticateUser = payload => ({
  type: AUTHENTICATE_USER,
  payload,
})

export const authUser = (username) => async (dispatch)  => {
  const user = await auth(username)
  dispatch(authenticateUser(user))
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTHENTICATE_USER:
      console.log(action.payload)
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default reducer;
