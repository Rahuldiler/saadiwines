import { Box, Dialog, Typography } from "@mui/material";
import React from "react";
// import SignUp from "../my-account/Sign-up";
import Login from "../my-account/Login";
import SignUp from "../my-account/Sign-up";
import ForgetPassword from "../my-account/ForgetPassword";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ResetPasswordInfo from "../my-account/ResetPasswordInfo";

const theme = createTheme();

const defaultTheme = createTheme();

function LoginModal({ open, handle, handleClose, setHandle }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ p: 4, background: "#fff" }}>
        <ThemeProvider theme={theme}>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              {handle === "login" && <Login setHandle={setHandle} />}
              {handle === "signup" && <SignUp setHandle={setHandle} />}
              {handle === "forgetPassword" && (
                <ForgetPassword setHandle={setHandle} />
              )}
              {handle === "resetPassword" && (
                <ResetPasswordInfo setHandle={setHandle} />
              )}
            </Container>
          </ThemeProvider>
        </ThemeProvider>
      </Box>
    </Dialog>
  );
}

export default LoginModal;
