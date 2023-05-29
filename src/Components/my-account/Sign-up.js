import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextFieldInput from './TextFieldInput';
import useApi from '../../api/my-account'

const defaultTheme = createTheme();

export default function SignUp({ setHandle }) {
    const { apiCall } = useApi();

    const signupDetail = {
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        number: '',
    }

    const [signup, setSignup] = useState(signupDetail)

    const onSignupChange = (event) => {
        setSignup(previousInputs => ({ ...previousInputs, [event.target.name]: event.target.value }))
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        var requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { data: signup, type: 'signup' }
        }

        try {
            const response = await apiCall('http://16.170.15.134:8080/register', requestOptions);
            if (response.status === 200) {
                alert("Sign Up Complete....!!!")
                setHandle(true)
            } else {
                console.log('Error:', response);
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };

    return (
        <>
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
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextFieldInput
                                        autoComplete="given-name"
                                        name="firstName"
                                        id="firstName"
                                        label="First Name"
                                        type="firstName"
                                        value={signup.firstName}
                                        onChange={onSignupChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextFieldInput
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        type="lastName"
                                        value={signup.lastName}
                                        onChange={onSignupChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldInput
                                        id="outlined-number"
                                        label="Number"
                                        name="number"
                                        autoComplete="tel"
                                        type="number"
                                        value={signup.number}
                                        onChange={onSignupChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldInput
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        type="email"
                                        value={signup.email}
                                        onChange={onSignupChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldInput
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={signup.password}
                                        onChange={onSignupChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <span onClick={() => setHandle(true)}>
                                        Already have an account? Sign in
                                    </span>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}