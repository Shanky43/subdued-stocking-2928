import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as Homeopathy } from "./Homeopathy/reducer"


const rootReducer = combineReducers({ Homeopathy })
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))