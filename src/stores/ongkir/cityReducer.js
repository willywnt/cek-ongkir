import * as cityActions from './cityActions';

const initialState = {
    cities: [],
    city1st: {},
    city2nd: {},
    error: null,
    loading: false,
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case cityActions.GET_ALL_CITY:
            return {
                ...state,
                cities: action.payload.cities,
            };
        case cityActions.SET_CITY_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case cityActions.GET_CITY_1ST:
            return {
                ...state,
                city1st: action.payload.city1st,
            };
        case cityActions.GET_CITY_2ND:
            return {
                ...state,
                city2nd: action.payload.city2nd,
            };
        case cityActions.GET_CITY_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default cityReducer;
