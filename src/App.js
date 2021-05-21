import {useSelector, useDispatch} from 'react-redux'
import {useState} from "react";
import './App.css'

const ToDos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const [value, setValue] = useState({value: '', status: false})

    return (
        <div>
            <input type="text" value={value.value} onChange={({target: {value}}) => {
                setValue({value: value, status: false})
            }
            }/>
            <button onClick={() => {
                dispatch({type: 'ADD', payload: value});
            }
            }>add task
            </button>
            <div>
                {
                    todos.map((item, index) => <div><span>
                        {item.value}</span>

                        <input type="checkbox" name="ckeckbox" onChange={({target: {checked}}) => {
                            dispatch({type: 'DONE', payload: {index:index, data: {value: item, status: checked}}})
                        }}/>
                        <button onClick={() => {
                            dispatch({type: 'DELETE', payload: index})
                        }}> delete
                        </button>

                    </div>)
                }
            </div>

        </div>
    )
}

export default function App() {
    return (
        <div>
            <ToDos/>
        </div>
    );
}