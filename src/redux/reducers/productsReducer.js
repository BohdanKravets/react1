import {
    SET_PRODUCTS, SET_PRODUCTS_LOADING, RESET_PRODUCTS_LOADING,
    ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART
} from '../actionTypes'

const initialState = {
    products: [],
    wishList: [],
    cart: [],
    isProductsLoading: false
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            };
        }
        case SET_PRODUCTS_LOADING: {
            return {
                ...state,
                isProductsLoading: true
            };
        }
        case RESET_PRODUCTS_LOADING: {
            return {
                ...state,
                isProductsLoading: false
            };
        }
        case ADD_TO_WISHLIST: {
            const alreadyExist = state.wishList.find(({id}) => id === action.payload);
            if (alreadyExist) {
                return state;
            }
            const itemsInProducts = state.products.find(el => el.id === action.payload)
            return {
                ...state,
                wishList: [...state.wishList, itemsInProducts]
            };
        }
        case REMOVE_FROM_WISHLIST: {
            const isMissing = !state.wishList.find(({id}) => id === action.payload);
            if (isMissing) {
                return state;
            }
            return {
                ...state,
                wishList: state.wishList.filter(value => value.id !==action.payload)
            };
        }
        case ADD_TO_CART: {
            return {
                ...state,
                isProductsLoading: false
            };
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                isProductsLoading: false
            };
        }

        default:
            return state;
    }
}