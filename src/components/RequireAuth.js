import React from 'react';
import { Container, Button, Typography, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeValue } from '../stores/navbar/navbarActions';

const RequireAuth = () => {
    const dispatch = useDispatch();

    const handleDirect = () => {
        dispatch(changeValue(2));
    }

    return (
        <Container maxWidth="md" sx={{ mt: '30vh' }}>
            <Stack justifyContent="center" sx={{ width: "50" }}>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Silahkan Login Terlebih Dahulu Disini</Typography>
                <Button variant="text" onClick={() => handleDirect()}>login</Button>
            </Stack>
        </Container>
    )
}

export default RequireAuth;