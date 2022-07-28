import axios from "axios";
import { setFiles } from "../actions/file";


const serverURL = 'http://localhost:3002'


export const getFiles = () => async (dispatch) => {
  try {
    const response = await axios.get(`${serverURL}/files`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
    dispatch(setFiles(response.data))
  } catch (e) {
    console.log('getFiles');
    alert(e.response.data.message)
  }
}


export const uploadFiles = (file) => async (dispatch) => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    const response = await axios.post(`${serverURL}/files/upload`, formData,
      {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        onUploadProgress: progressEvent => {
          const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
          console.log('total', totalLength)
          if (totalLength) {
            let progress = Math.round((progressEvent.loaded * 100) / totalLength)
            console.log(progress)
          }
        }
      })
    dispatch(setFiles(response.data))
  } catch (e) {
    console.log('uploadFiles');
    alert(e.response.data.message)
  }
} 
