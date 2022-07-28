export const SET_FILES = 'SET_FILES'
export const ADD_FILE = 'ADD_FILE'


export const setFiles = (files) => ({ type: SET_FILES, payload: files })
export const addFile = (file) => ({ type: ADD_FILE, payload: file })
