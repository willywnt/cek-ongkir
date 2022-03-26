import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProvinces, SelectedProvince1st } from '../stores/ongkir/provinceActions';

import { TextField, Autocomplete, CircularProgress } from '@mui/material';

const ProvinceOrigin = ({ getProvinces, SelectedProvince1st, provinces, error, loading }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        getProvinces();
    }, []);

    useEffect(() => {
        let active = true;

        if (loading) {
            return undefined;
        }
        if (active) {
            setOptions([...provinces]);
        }

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        SelectedProvince1st(selected);
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
            isOptionEqualToValue={(option, value) => option.province === value.province}
            getOptionLabel={(option) => option.province}
            options={options}
            loading={loading}
            value={selected}
            onChange={(event, newValue) => {
                setSelected(newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Provinsi Asal"
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
        provinces: state.provinceReducer.provinces,
        loading: state.provinceReducer.loading,
        error: state.provinceReducer.error,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProvinces: () => {
            return dispatch(getProvinces());
        },
        SelectedProvince1st: (selected1st) => {
            return dispatch(SelectedProvince1st(selected1st));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvinceOrigin);