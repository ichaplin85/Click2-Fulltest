export const SET_USER = "SET_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const FETCH_ALL_USERS = "FETCH_ALL_USERS"




export const setUser = (user) => ({ type: SET_USER, payload: user })
export const logoutUser = () => ({ type: LOGOUT_USER })
export const fetchAllUsers = (users) => ({ type: FETCH_ALL_USERS, payload: users })


