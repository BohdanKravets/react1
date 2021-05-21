import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import  {Provider} from 'react-redux';


const initialState = {
    todos:[]
}

const reducer = (state = initialState, action) => {
switch (action.type) {
    case 'ADD':{
        return {...state, todos: [...state.todos,action.payload]}
    }
    case 'DELETE':{
        return {...state,todos:[...state.todos.slice(0,action.payload),...state.todos.slice(action.payload+1)]}
    }
    case 'DONE':{
        return {...state,todos:[...state.todos.slice(0,action.payload.index),action.payload.data,...state.todos.slice(action.payload.index+1)]}
    }
    default:
        return state;
}

}

const store = createStore(reducer);

store.subscribe((state) => {
    console.log(store.getState())
})



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
