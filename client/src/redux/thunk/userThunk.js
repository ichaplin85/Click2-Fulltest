import axios from "axios";
import { setUser } from "../actions/user";


const serverURL = 'http://localhost:3002'

export const registration = async (name, email, password, date, gender) => {

  try {
    const response = await axios.post(`${serverURL}/registration`, {
      name,
      email,
      password,
      birthdate: date,
      gender
    })
    alert(response.data.message)
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
    console.log(response.data);
  } catch (error) {
    alert(error.response.data.message)
  }
}
