import * as navbarActions from './navbarActions';

const initialState = {
    value: 0,
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case navbarActions.CHANGE_VALUE:
            return {
                value: action.payload.value,
            };
        default:
            return state;
    }
};

export default navbarReducer;
