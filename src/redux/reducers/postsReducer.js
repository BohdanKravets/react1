import {START_POST_LOADING, STOP_POST_LOADING, SET_POSTS} from '../action-types'
const initialState = {
    posts: [],
    isPostsLoading: false
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_POST_LOADING: {
            return {
                ...state,
                isPostsLoading: true
            }
        }
        case STOP_POST_LOADING: {
    return {
                ...state,
                isPostsLoading: true
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        default:
            return state;
    }
}