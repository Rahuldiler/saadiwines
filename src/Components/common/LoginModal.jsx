import { Box, Dialog } from "@mui/material";
import React from "react";
// import SignUp from "../my-account/Sign-up";
import Login from "../my-account/Login";
import SignUp from "../my-account/Sign-up";
import ForgetPassword from "../my-account/ForgetPassword";

function LoginModal({ open, handle, handleClose, setHandle }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ p: 4, background: "#fff" }}>
        {handle === "login" && <Login setHandle={setHandle} />}
        {handle === "signup" && <SignUp setHandle={setHandle} />}
        {handle === "forgetPassword" && (
          <ForgetPassword setHandle={setHandle} />
        )}
      </Box>
    </Dialog>
  );
}

export default LoginModal;
