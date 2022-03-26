import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SelectedCity2nd } from '../stores/ongkir/cityActions';

import { TextField, Autocomplete, CircularProgress } from '@mui/material';

const CityDestination = ({ SelectedCity2nd, province2nd, cities, error, loading }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(null);

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
        if (!province2nd) {
            setOptions([]);
            setSelected(null);
        } else {
            setSelected(null);
            let filted = cities.filter(city => city.province_id === province2nd.province_id);
            setOptions([...filted]);
        }
    }, [province2nd]);

    useEffect(() => {
        SelectedCity2nd(selected);
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
            value={province2nd !== null ? selected : null}
            onChange={(event, newValue) => {
                setSelected(newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Kota / Kab. Tujuan"
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
        province2nd: state.provinceReducer.province2nd,
        loading: state.cityReducer.loading,
        error: state.cityReducer.error,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SelectedCity2nd: (selected2nd) => {
            return dispatch(SelectedCity2nd(selected2nd));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDestination);