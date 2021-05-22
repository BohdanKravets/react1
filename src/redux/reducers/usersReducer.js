import {SET_USERS, START_USERS_LOADING, STOP_USERS_LOADING, SET_USERS_ERROR} from '../action-types'

const initialState = {
    users: [],
    isUsersLoading: false,
    usersError: ''
};

export const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.payload
            };
        }
        case START_USERS_LOADING: {
            return {
                ...state,
                isUsersLoading: true
            };
        }
        case STOP_USERS_LOADING: {
            return {
                ...state,
                isUsersLoading: false
            };
        }
        case SET_USERS_ERROR: {
            return {
                ...state,
                usersError: action.payload
            };
        }
        default:
            return state;

    }
}