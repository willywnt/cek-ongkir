import axios from "axios";

// Get City
export const SET_CITY_LOADING = 'SET_CITY_LOADING';
export const GET_ALL_CITY = 'GET_ALL_CITY';
export const GET_CITY_1ST = 'GET_CITY_1ST';
export const GET_CITY_2ND = 'GET_CITY_2ND';
export const GET_CITY_FAILURE = 'GET_CITY_FAILURE';


export const setCityLoading = loading => ({
    type: SET_CITY_LOADING,
    payload: { loading },
})

export const getAllCity = cities => ({
    type: GET_ALL_CITY,
    payload: { cities },
});

export const getCity1st = city1st => ({
    type: GET_CITY_1ST,
    payload: { city1st },
});

export const getCity2nd = city2nd => ({
    type: GET_CITY_2ND,
    payload: { city2nd },
});

export const getCityFailure = error => ({
    type: GET_CITY_FAILURE,
    payload: { error },
});


export const getCities = () => {
    return dispatch => {
        dispatch(setCityLoading(true));
        
        return axios.get('http://localhost:4000/city')
            .then(response => {
                let res = response.data.rajaongkir;
                if (res.status.code === 200) {
                    dispatch(getAllCity(res.results));
                } else {
                    dispatch(getCityFailure(res.status.description));
                }
                dispatch(setCityLoading(false));
            })
            .catch(error => {
                dispatch(getCityFailure(error));
            })
    }
}

export const SelectedCity1st = (selected) => {
    return dispatch => {
        dispatch(getCity1st(selected));
    }
}
export const SelectedCity2nd = (selected) => {
    return dispatch => {
        dispatch(getCity2nd(selected));
    }
}