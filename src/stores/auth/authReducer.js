import * as authActions from './authActions';

const initialState = {
    username: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActions.GET_AUTH_LOGIN:
            return {
                username: action.payload.username,
            };
        case authActions.GET_AUTH_LOGOUT:
            return {
                username: '',
            };
        default:
            return state;
    }
};

export default authReducer;
