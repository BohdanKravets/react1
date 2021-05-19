import {useSelector, useDispatch} from 'react-redux'
import {useState} from "react";

const ToDos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    return (
        <div>
            <input type="text" value={value} onChange={({target: {value}}) => {
                setValue(value)
            }
            }/>
            <button onClick={() => {
                dispatch({type: 'ADD', payload: value});
            }
            }>add task
            </button>
            <div>
                {
                    todos.map((value, index) => <div>{value}
                        <button onClick={() => {
                            dispatch({type: 'DELETE', payload: index})
                        }}>   delete
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