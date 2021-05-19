const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {...state, counter: state.counter + 1};
        }
        case 'DEC': {
            return {...state, counter: state.counter - 1};
        }
        case 'INC100': {
            return {...state, counter: state.counter + 100};
        }
        case 'DEC100': {
            return {...state, counter: state.counter - 100};
        }
        default:
            return state;

    }
}
export default counterReducer;