import {applyMiddleware, combineReducers, createStore} from "redux";

// this helps us to visualize the prev and next state after any state changes happens
// this shows in the console
import logger from "redux-logger";

// this is used for the request which needs asynchronous behavior 
import thunk from "redux-thunk";

import counterReducer from "../Reducers/counterReducer";
import todosReducer from "../Reducers/todosReducer";

// combine the reducers as redux can store one reducer at a time
const reducer = combineReducers({
    counterR : counterReducer,
    todosR : todosReducer,
}); 

// creating list of middlewares
const middlewares = [logger,thunk];
// creating store 
const store = createStore(reducer,applyMiddleware(...middlewares));

export default store;