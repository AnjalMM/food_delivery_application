import { combineReducers } from "redux";
import {createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'

import { composeWithDevTools } from "redux-devtools-extension";
import { addPizzaReducer, getAllPizzasReducer } from "./reducers/pizzareducer";
import { cartReducer } from "./reducers/cartReducers";
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import { getAllOrdersReducer, getUserOrdersReducer, placeOrderReducer } from "./reducers/orderReducer";



const finalReducers = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addPizzaReducer  : addPizzaReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllUsersReducer : getAllUsersReducer,
})
const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[];

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null;

const initalState={
    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer : {
        currentUser : currentUser
    }
    
}

const composeEnhancers=composeWithDevTools({})//from redux dev tools

//to create store we have to use three params one is reducer,sec one is initial state, and third one is composeEnhancers
const store=createStore(finalReducers, initalState, composeEnhancers(applyMiddleware(thunk)))

export default store