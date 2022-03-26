import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCities, SelectedCity1st } from '../stores/ongkir/cityActions';

import { TextField, Autocomplete, CircularProgress } from '@mui/material';

const CityOrigin = ({ getCities, SelectedCity1st, province1st, cities, error, loading }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        getCities();
    }, []);

    useEffect(() => {
        let active = true;

        if (loading) {
            return undefined;
        }
        if (active) {
            setOptions([...cities]);
        }

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!province1st) {
            setOptions([]);
            setSelected(null);
        } else {
            setSelected(null);
            let filted = cities.filter(city => city.province_id === province1st.province_id);
            setOptions([...filted]);
        }
    }, [province1st]);

    useEffect(() => {
        SelectedCity1st(selected);
    }, [selected]);

    return (
        <Autocomplete
            sx={{ width: '25%' }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option.city_id === value.city_id}
            getOptionLabel={(option) => `${option.type} / ${option.city_name}`}
            options={options}
            loading={loading}
            value={province1st !== null ? selected : null}
            onChange={(event, newValue) => {
                setSelected(newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Kota / Kab. Asal"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        cities: state.cityReducer.cities,
        province1st: state.provinceReducer.province1st,
        loading: state.cityReducer.loading,
        error: state.cityReducer.error,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCities: () => {
            return dispatch(getCities());
        },
        SelectedCity1st: (selected1st) => {
            return dispatch(SelectedCity1st(selected1st));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityOrigin);