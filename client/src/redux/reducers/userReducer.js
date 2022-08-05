import { LOGOUT_USER, SET_USER, FETCH_ALL_USERS, FETCHING_ALL_USERS, FETCHING_ERRORS_USERS } from "../actions/user"

const defaultState = {
  users: [],
  currentUser: {},
  isAuth: false,
  usersLoadingStatus: 'idle'
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

    case FETCHING_ALL_USERS:
      return {
        ...state,
        usersLoadingStatus: 'loading'
      }

    case FETCH_ALL_USERS:
      return {
        ...state,
        users: payload,
        usersLoadingStatus: 'idle'
      }

    case FETCHING_ERRORS_USERS:
      return {
        ...state,
        usersLoadingStatus: 'error'
      }

    default:
      return state
  }
}

