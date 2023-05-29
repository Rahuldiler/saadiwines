import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import React, {useState} from 'react';
import TextFieldInput from '../Common/TextFieldInput';
import {login} from '@/services/auth/auth'

const theme = createTheme();

const defaultTheme = createTheme();

export default function SignIn({setHandle}) {
    const loginDetail = {
        email: '',
        password: '',
    }

    const [credentials, setCredentials] = useState(loginDetail)

    const onLoginChange = (event) => {
        setCredentials(previousInputs => ({...previousInputs, [event.target.name]: event.target.value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login(credentials);
        } catch (error) {
            alert("Incorrect Credentials!")
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextFieldInput
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                type="email"
                                value={credentials.email}
                                onChange={onLoginChange}
                            />
                            <TextFieldInput
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={credentials.password}
                                onChange={onLoginChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
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
