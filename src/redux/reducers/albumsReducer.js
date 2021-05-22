import {SET_ALBUMS, START_ALBUMS_LOADING, STOP_ALBUMS_LOADING, SET_ALBUMS_ERROR} from '../action-types';

const initialState = {
  albums: [],
  isAlbumsLoading: false,
  albumsError: ''
};

export const albumsReducer = (state = initialState,action) =>{
    switch (action.type){
        case SET_ALBUMS:{
            return {
                ...state,
                albums: action.payload
            };
        }
        case START_ALBUMS_LOADING:{
            return {
                ...state,
                isAlbumsLoading: true
            };
        }
        case STOP_ALBUMS_LOADING:{
            return {
                ...state,
                isAlbumsLoading: false
            };
        }
        case SET_ALBUMS_ERROR:{
            return {
                ...state,
                albumsError: action.payload
            };
        }
        default:
            return state;

    }
}