import {SET_TODOS, START_TODOS_LOADING, STOP_TODOS_LOADING, SET_TODOS_ERROR} from '../action-types';

export const setTodos = (payload) => ({type: SET_TODOS, payload});
export const startTodosLoading = () => ({type: START_TODOS_LOADING});
export const stopTodosLoading = () => ({type: STOP_TODOS_LOADING});
export const setTodosError = (payload) => ({type: SET_TODOS_ERROR, payload});