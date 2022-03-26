import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SelectedProvince2nd } from '../stores/ongkir/provinceActions';

import { TextField, Autocomplete, CircularProgress } from '@mui/material';

const ProvinceDestination = ({ SelectedProvince2nd, provinces, error, loading }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(null);

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
        SelectedProvince2nd(selected);
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
                    label="Provinsi Tujuan"
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
        SelectedProvince2nd: (selected2nd) => {
            return dispatch(SelectedProvince2nd(selected2nd));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvinceDestination);