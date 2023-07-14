
import { combineReducers,createStore,applyMiddleware     } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk"
import { userReducer } from "./Reducers/userReducer";

const combinReucer = combineReducers({
    usersList:userReducer

})
 let intialState = {
 }
 let middelware=[thunk]
 const Store = createStore( combinReucer,intialState,composeWithDevTools(  applyMiddleware(...middelware)))

export default Store