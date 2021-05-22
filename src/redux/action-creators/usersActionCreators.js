import {SET_USERS, START_USERS_LOADING, STOP_USERS_LOADING, SET_USERS_ERROR} from '../action-types';

export const setUsers = (payload) => ({type: SET_USERS, payload});
export const startUsersLoading = () => ({type: START_USERS_LOADING});
export const stopUsersLoading = () => ({type: STOP_USERS_LOADING});
export const setUsersError = (payload) => ({type: SET_USERS_ERROR, payload});