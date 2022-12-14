import axios from "axios";
import { fetchAllUsers, fetchingAllUsers, fetchingErrorsUsers, setUser } from "../actions/user";


const serverURL = 'http://localhost:3002'

export const registration = (name, email, password, date, gender, file) => async (dispatch) => {

  const formData = new FormData();
  formData.append('name', name)
  formData.append('email', email)
  formData.append('password', password)
  formData.append('date', date)
  formData.append('gender', gender)
  formData.append('file', file)
  try {
    const response = await axios.post(`${serverURL}/registration`, formData)

    localStorage.setItem('token', response.data.token)
    dispatch(setUser(response.data.user))

  } catch (error) {

    alert(error.response.data.message)
  }
}

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${serverURL}/login`, {
      email,
      password,
    })
    dispatch(setUser(response.data.user))
    localStorage.setItem('token', response.data.token)
  } catch (error) {
    alert(error.response.data.message)
  }
}


export const authUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`${serverURL}/auth`,
      { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    )
    dispatch(setUser(response.data.user))
    localStorage.setItem('token', response.data.token)
  } catch (error) {

    alert(error.response.data.message)
    localStorage.removeItem('token')
  }
}

export const changeUserData = (name, password, file) => async (dispatch) => {

  const formData = new FormData()
  formData.append('name', name)
  formData.append('password', password)
  formData.append('file', file)

  try {
    const response = await axios.put(`${serverURL}/account`, formData,
      { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    dispatch(setUser(response.data.user))
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const fetchUsers = () => async (dispatch) => {

  dispatch(fetchingAllUsers())
  try {
    const response = await axios(`${serverURL}/people`,
      { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    )
    dispatch(fetchAllUsers(response.data.users))
  } catch (e) {
    dispatch(fetchingErrorsUsers())
    alert(e.response.data.message)
  }

}
