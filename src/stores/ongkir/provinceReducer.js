import * as provinceActions from './provinceActions';

const initialState = {
    provinces: [],
    province1st: {},
    province2nd: {},
    error: null,
    loading: false,
};

const provinceReducer = (state = initialState, action) => {
    switch (action.type) {
        case provinceActions.GET_ALL_PROVINCE:
            return {
                ...state,
                provinces: action.payload.provinces,
            };
        case provinceActions.SET_PROVINCE_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case provinceActions.GET_PROVINCE_1ST:
            return {
                ...state,
                province1st: action.payload.province1st,
            };
        case provinceActions.GET_PROVINCE_2ND:
            return {
                ...state,
                province2nd: action.payload.province2nd,
            };
        case provinceActions.GET_PROVINCE_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default provinceReducer;
