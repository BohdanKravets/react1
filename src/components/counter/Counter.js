import {useDispatch, useSelector} from 'react-redux';
import './Counter.css';

export default function Counter() {
    const counter = useSelector(state => state.counter);
    const inc =() =>{
        dispatch({type: 'INC'});
    }
    const dec =() =>{
        dispatch({type: 'DEC'});
    }
    const inc100 =() =>{
        dispatch({type: 'INC100'});
    }
    const dec100 =() =>{
        dispatch({type: 'DEC100'});
    }

    const dispatch = useDispatch();
    return (
        <div>
            Counter:{counter}
            <div className={'button'}>
                <button onClick={inc}>inc</button>
                <button onClick={dec}>dec</button>
                <button onClick={inc100}>dec100</button>
                <button onClick={dec100}>inc100</button>
            </div>
        </div>
    );
}