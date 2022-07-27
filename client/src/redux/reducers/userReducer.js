import { SET_USER } from "../actions/user"

const defaultState = {
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

    default:
      return state
  }
}

