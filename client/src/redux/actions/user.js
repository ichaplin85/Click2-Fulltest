export const SET_USER = "SET_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const FETCH_ALL_USERS = "FETCH_ALL_USERS"
export const FETCHING_ALL_USERS = "FETCHING_ALL_USERS"
export const FETCHING_ERRORS_USERS = "FETCHING_ERRORS_USERS"





export const setUser = (user) => ({ type: SET_USER, payload: user })
export const logoutUser = () => ({ type: LOGOUT_USER })
export const fetchAllUsers = (users) => ({ type: FETCH_ALL_USERS, payload: users })
export const fetchingAllUsers = () => ({ type: FETCHING_ALL_USERS })
export const fetchingErrorsUsers = () => ({ type: FETCHING_ERRORS_USERS })
