import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../stores/navbar/navbarActions';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';

const Navbar = () => {
    const username = useSelector((state) => state.authReducer.username);
    const value = useSelector((state) => state.navbarReducer.value);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        dispatch(changeValue(newValue));
    };

    React.useEffect(() => {
        if (value === 0) {
            navigate('/');
        } else if (value === 1) {
            navigate('/profile');
        } else if (value === 2) {
            navigate('/login');
        }
    }, [value]);

    const LinkTab = (props) => {
        return (<Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />);
    }
    return (
        <Container
            sx={{
                height: '70px',
                width: 1,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center'
            }}
        >
            <Tabs value={value} onChange={handleChange} aria-label="nav-tabs">
                <LinkTab label="Home" href="/" />
                <LinkTab label="Profile" href="/profile" />
                {username == '' ? <LinkTab label="Login" href="/login" /> : null}
            </Tabs>

        </Container>
    )
}

export default Navbar;