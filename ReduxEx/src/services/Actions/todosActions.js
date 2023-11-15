import {GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "../Constants/actionTypes";
export const requestAction = ()=>{
    return {
        type : GET_TODOS_REQUEST,
    };
}
export const successAction = (payload)=>{
    return {
        type : GET_TODOS_SUCCESS,
        payload,
    };
}
export const failureAction = (payload)=>{
    return {
        type : GET_TODOS_FAILURE,
        payload,
    };
}