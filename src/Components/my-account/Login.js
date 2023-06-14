import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { TextFieldInput } from "../common/TextFieldInput";
import { login } from "@/services/auth/auth";
import { COLORS } from "../utils/ConstantTheme";
import { useRouter } from "next/router";

const theme = createTheme();

const defaultTheme = createTheme();

export default function SignIn({ setHandle }) {
    const router = useRouter();
    const loginDetail = {
        email: "",
        password: "",
    };

    const [credentials, setCredentials] = useState(loginDetail);
    const [validationErrorMessage, setValidationErrorMessage] = useState(null);
    const onLoginChange = (event) => {
        setValidationErrorMessage(null);
        setCredentials((previousInputs) => ({
            ...previousInputs,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login(credentials);
            router.push("/dashboard");
            // alert("Login success!");
        } catch (error) {
            console.log(error.response.data.message);
            setValidationErrorMessage(error.response.data.message);
            // alert("Incorrect Credentials!");
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, background: COLORS.primary }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            validate
                            sx={{ mt: 1 }}
                        >
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
                            <Typography
                                variant="span"
                                sx={{ color: "red", fontSize: "16px" }}
                            >
                                {validationErrorMessage}
                            </Typography>
                            <Button
                                className={`bg-[${COLORS.primary}]`}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    "&:hover": {
                                        backgroundColor: COLORS.hoverPrimary,
                                    },
                                }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Button
                                        variant="body2"
                                        sx={{
                                            fontWeight: 400,
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setHandle(false)}
                                    >
                                        Don't have an account? Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </ThemeProvider>
    );
}
