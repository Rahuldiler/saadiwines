import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import TextFieldInput from './TextFieldInput';
import useApi from '../api/my-account'

const theme = createTheme();

const defaultTheme = createTheme();

export default function SignIn({setHandle}) {

    const { apiCall } = useApi();
    const loginDetail = {
        email: '',
        password: '',
    }

    const [login, setLogin] = useState(loginDetail)

    const onLoginChange = (event) => {
        setLogin(previousInputs => ({ ...previousInputs, [event.target.name]: event.target.value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        var requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { data: login, type: 'login' }
        }

        try {
            const response = await apiCall('http://16.170.15.134:8080/login', requestOptions);
            if (response.status === 200) {
                alert("Login Successfully")
            } else {
                console.log('Error:', response);
            }
        } catch (error) {
            alert("enter currect details")
        }

    }

    return (
        <ThemeProvider theme={theme} >
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextFieldInput
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                type="email"
                                value={login.email}
                                onChange={onLoginChange}
                            />
                            <TextFieldInput
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={login.password}
                                onChange={onLoginChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <span onClick={() => setHandle(false)}>
                                        Don't have an account? Sign Up
                                    </span>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </ThemeProvider>
    )
}