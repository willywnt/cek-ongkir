import axios from "axios";

// Get Province
export const SET_PROVINCE_LOADING = 'SET_PROVINCE_LOADING';
export const GET_ALL_PROVINCE = 'GET_ALL_PROVINCE';
export const GET_PROVINCE_1ST = 'GET_PROVINCE_1ST';
export const GET_PROVINCE_2ND = 'GET_PROVINCE_2ND';
export const GET_PROVINCE_FAILURE = 'GET_PROVINCE_FAILURE';


export const setProvinceLoading = loading => ({
    type: SET_PROVINCE_LOADING,
    payload: { loading },
})

export const getAllProvince = provinces => ({
    type: GET_ALL_PROVINCE,
    payload: { provinces },
});

export const getProvince1st = province1st => ({
    type: GET_PROVINCE_1ST,
    payload: { province1st },
});

export const getProvince2nd = province2nd => ({
    type: GET_PROVINCE_2ND,
    payload: { province2nd },
});

export const getProvinceFailure = error => ({
    type: GET_PROVINCE_FAILURE,
    payload: { error },
});

export const getProvinces = () => {
    return dispatch => {
        dispatch(setProvinceLoading(true));
        return axios.get('/province')
            .then(response => {
                let res = response.data.rajaongkir;
                if (res.status.code === 200) {
                    dispatch(getAllProvince(res.results));
                } else {
                    dispatch(getProvinceFailure(res.status.description));
                }
                dispatch(setProvinceLoading(false));
            })
            .catch(error => {
                dispatch(getProvinceFailure(error));
            })
    }
}

export const SelectedProvince1st = (selected) => {
    return dispatch => {
        dispatch(getProvince1st(selected));
    }
}
export const SelectedProvince2nd = (selected) => {
    return dispatch => {
        dispatch(getProvince2nd(selected));
    }
}