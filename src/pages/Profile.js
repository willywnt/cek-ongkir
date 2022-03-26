import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthLogout } from '../stores/auth/authActions';

const Profile = () => {
    const username = useSelector((state) => state.authReducer.username);
    const dispatch = useDispatch();

    const handleLogout = () =>{
        dispatch(getAuthLogout());
    }

    return (
        <Container maxWidth="md" sx={{ mt: '30vh' }}>
            <Stack justifyContent="center" sx={{ width: "50" }}>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Selamat datang {username}</Typography>
                <Button variant="text" onClick={() => handleLogout()}>Logout</Button>
            </Stack>
        </Container>
    )
}

export default Profile;