import { ADD_FILE, SET_FILES } from "../actions/file"


const defaultState = {
  files: []
}

export default function fileReducer(state = defaultState, action) {
  const {type, payload} = action;
  
  switch(type) {
    case SET_FILES:
      return {
        ...state,
        files: payload
      }
    case ADD_FILE: 
      return {
        ...state,
        files: [...state.files, payload]
      }
    
    default:
      return state
  }
}
