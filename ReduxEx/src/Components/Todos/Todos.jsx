import axios from "axios";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {failureAction, requestAction, successAction} from "../../services/Actions/todosActions";
import './Todos.css';
const getTodos = async (dispatch)=>{
    try{
        dispatch(requestAction());
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch(successAction(data));

    }catch(error){
        dispatch(failureAction(error.message));
    }
}
const Todos = () => {
    const {error, loading, todos} = useSelector(state => state.todosR);
    const dispatch = useDispatch();
    useEffect(()=>{
        getTodos(dispatch);
    },[dispatch]);
  return (
    <>
    <h2>TODOS</h2>
    <div className="container">
        {error ? (<div className="error">{error}</div>) : 
            loading ?  (<div className="loader"></div>) :
             (
                <div className="todosList">
                    <ul>
                        {
                         todos.map(todo => (
                            <li key={todo.id}>
                                <strong>User ID:</strong> {todo.userId}<br />
                                <strong>ID:</strong> {todo.id}<br />
                                <strong>Title:</strong> {todo.title}<br />
                                <strong>Completed:</strong> {todo.completed.toString()}
                            </li>
                        ))}
                       
                    </ul>
                    
                </div>
            )
                    }
        
        
    </div>
    </>
  );
}

export default Todos;