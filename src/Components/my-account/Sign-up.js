import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signUp } from "@/services/auth/auth";
import { COLORS } from "../utils/ConstantTheme";
import { FormControl } from "@mui/material";
import { TextFieldInput } from "../common/TextFieldInput";

const defaultTheme = createTheme();

export default function SignUp({ setHandle }) {
  const signupDetail = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    number: "",
  };

  const [userData, setUserData] = useState(signupDetail);

  const onSignupChange = (event) => {
    setUserData((previousInputs) => ({
      ...previousInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signUp(userData);
      if (response.status === 200) {
        // alert("Sign Up Complete....!!!");n
        setHandle(true);
      } else {
        console.log("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
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
              Sign up
            </Typography>
            <FormControl>
              <Box
                component="form"
                validate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextFieldInput
                      autoComplete="given-name"
                      name="firstName"
                      id="firstName"
                      label="First Name"
                      type="firstName"
                      required
                      value={userData.firstName}
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
                      required
                      value={userData.lastName}
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
                      required
                      value={userData.number}
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
                      required
                      value={userData.email}
                      onChange={onSignupChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldInput
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      required
                      autoComplete="new-password"
                      value={userData.password}
                      onChange={onSignupChange}
                    />
                  </Grid>
                </Grid>
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
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      variant="body2"
                      sx={{ fontWeight: 400, cursor: "pointer" }}
                      onClick={() => setHandle(true)}
                    >
                      Already have an account? Sign in
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
