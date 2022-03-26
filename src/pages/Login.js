import React, { useState } from 'react';
import { Button, Container, Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeValue } from '../stores/navbar/navbarActions';
import { getAuthLogin } from '../stores/auth/authActions';

const Login = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username != '') {
            dispatch(getAuthLogin(username));
            dispatch(changeValue(0));
        }
    }
    return (
        <Container maxWidth="md" sx={{ mt: '30vh' }}>
            <Stack justifyContent="center" direction="row">
                <TextField id="outlined-basic" label="Username" variant="outlined"
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }} />
                <Button variant="text" onClick={() => handleLogin()}>Login</Button>
            </Stack>
        </Container>
    )
}

export default Login;