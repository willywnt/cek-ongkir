import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { ProvinceOrigin, CityOrigin, ProvinceDestination, CityDestination, TableOngkir } from '../components';
import { Container, Stack, Divider, TextField, InputAdornment, Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Home = ({ city1st, city2nd }) => {
    const [weight, setWeight] = useState(0);
    const [loading, setLoading] = useState(false);
    const [costs, setCosts] = useState(null);


    const handleClick = async () => {
        setLoading(true);
        if (city1st != null && city2nd != null && weight != '') {
            let origin = city1st.city_id;
            let destination = city2nd.city_id;

            let costsJNE = await axios.post(`/costs-jne?origin=${origin}&destination=${destination}&weight=${weight}`);
            let costsPOS = await axios.post(`/costs-pos?origin=${origin}&destination=${destination}&weight=${weight}`);
            let costsTIKI = await axios.post(`/costs-tiki?origin=${origin}&destination=${destination}&weight=${weight}`);
            costsJNE = costsJNE.data.rajaongkir.results;
            costsPOS = costsPOS.data.rajaongkir.results;
            costsTIKI = costsTIKI.data.rajaongkir.results;

            setCosts([costsJNE, costsTIKI, costsPOS]);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }

    return (
        <Container maxWidth="md">
            <Typography my={4} variant={'h4'} sx={{ fontWeight: 'bold' }}>Cek Ongkir</Typography>
            <Stack
                justifyContent="center"
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <ProvinceOrigin />
                <CityOrigin />
                <TextField
                    label="Berat"
                    id="outlined-start-adornment"
                    type="number"
                    sx={{ width: 150 }}
                    value={weight}
                    onChange={(event) => {
                        setWeight(event.target.value);
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">gr</InputAdornment>,
                    }}
                />
            </Stack>
            <Stack
                justifyContent="center"
                direction="row"
                mt={4}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <ProvinceDestination />
                <CityDestination />
                <LoadingButton
                    sx={{ width: 150 }}
                    onClick={handleClick}
                    loading={loading}
                    variant="contained"
                >
                    Cek tarif
                </LoadingButton>
            </Stack>
            {costs ? (<Box my={16}>
                <TableOngkir costs={costs} />
            </Box>) : null}

        </Container>
    )
}


const mapStateToProps = (state) => {
    return {
        city1st: state.cityReducer.city1st,
        city2nd: state.cityReducer.city2nd,
    };
}

export default connect(mapStateToProps, null)(Home);
