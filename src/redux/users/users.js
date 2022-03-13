import { auth } from "../../helpers/auth";

const AUTHENTICATE_USER = 'coinsTracker/users/AUTHENTICATE_USER';

const initialState = [];

export const authenticateUser = payload => ({
  type: AUTHENTICATE_USER,
  payload,
})

export const signupUser = (username) => async (dispatch)  => {
  const user = await auth('signup', username)
  if (user.error === undefined) {
    dispatch(authenticateUser(user))
  }
}

export const loginUser = (username) => async (dispatch)  => {
  const user = await auth('login', username)
  if (user.error === undefined) {
    dispatch(authenticateUser(user))
  }
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
