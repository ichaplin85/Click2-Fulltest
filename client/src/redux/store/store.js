import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware,  legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composedEnhancer)
