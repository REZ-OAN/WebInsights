import {GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "../Constants/actionTypes";

const initialTodosState = {
    loading : false,
    error : "",
    todos : [
    ],
};
const todosReducer = (state = {...initialTodosState}, action) => {
    switch(action.type){
        case GET_TODOS_REQUEST:
            return {
                ...state,
               loading:true,
               error : "",
            };
        case GET_TODOS_SUCCESS : 
            return {
                ...state,
                loading :false,
                error : "",
                todos : [...state.todos,...action.payload],
            };
        case GET_TODOS_FAILURE :
            return {
                ...state,
                loading:false,
                error : action.payload,
            };
        default :
            return state;
    }
};
export default todosReducer;