import { Box, Dialog } from "@mui/material";
import React from "react";
import SignUp from "../my-account/Sign-up";
import Login from "../my-account/Login";

function LoginModal({ open, handle, handleClose, setHandle }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ p: 4, background: "#fff" }}>
        {handle ? (
          <Login setHandle={setHandle} />
        ) : (
          <SignUp setHandle={setHandle} />
        )}
      </Box>
    </Dialog>
  );
}

export default LoginModal;
