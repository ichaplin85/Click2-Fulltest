import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";

const rootReducer = combineReducers({
  user: userReducer,
  file: fileReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
