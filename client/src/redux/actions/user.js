import axios from "axios";

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
