import { auth } from "../../helpers/auth";

const AUTHENTICATE_USER = 'coinsTracker/users/AUTHENTICATE_USER';
const LOGOUT_USER = 'coinsTracker/users/LOGOUT_USER';

const initialState = {
  user: null
};

export const authenticateUser = payload => ({
  type: AUTHENTICATE_USER,
  payload,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})

export const signupUser = (username) => async (dispatch)  => {
  const user = await auth('signup', username)
  if (user.error === undefined) {
    dispatch(authenticateUser(user))
    return 'signedUp'
  } else {
    return user.error
  }
}

export const loginUser = (username) => async (dispatch)  => {
  const user = await auth('login', username)
  if (user.error === undefined) {
    dispatch(authenticateUser(user))
    return 'loggedIn'
  } else {
    return user.error
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGOUT_USER:
      return state = initialState
    default:
      return state
  }
}

export default reducer;
