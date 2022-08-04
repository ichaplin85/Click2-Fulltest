import { LOGOUT_USER, SET_USER, FETCH_ALL_USERS } from "../actions/user"

const defaultState = {
  users: [],
  currentUser: {},
  isAuth: false
}

export default function userReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case SET_USER:
      return {
        ...state,
        currentUser: payload,
        isAuth: true
      }

    case LOGOUT_USER:
      return {
        currentUser: {},
        isAuth: false
      }

    case FETCH_ALL_USERS:
      return {
        ...state,
        users: payload
      }

    default:
      return state
  }
}

