import {useDispatch, useSelector} from "react-redux";
import {setTodos, setTodosError, startTodosLoading, stopTodosLoading} from "../../redux";
import {getTodos} from "../../services/api";
import {useEffect} from "react";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import ErrorScreen from "../errorScreen/ErrorScreen";
import Todo from "../todo/Todo";

export default function Todos() {
    const todosData = useSelector(({todos}) => todos);
    const dispatch = useDispatch();

    const todosFetcher = async () => {
        try {
            dispatch(startTodosLoading());
            const resp = await getTodos();
            dispatch(setTodos(resp.data));
        } catch (e) {
            dispatch(setTodosError('Failed to fetch data from posts'));
        } finally {
            dispatch(stopTodosLoading());
        }

    }

    useEffect(() => {
        todosFetcher();
    }, []);

    if (todosData.isTodosLoading) {
        return <LoadingScreen data ={'Todos'}/>

    }
    if(todosData.todosError){
        return <ErrorScreen error ={todosData.todosError}/>
    }
    return (
        <div>
            {
                todosData.todos.map(value => <Todo
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    );
}