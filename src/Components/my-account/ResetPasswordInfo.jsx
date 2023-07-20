import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { COLORS } from "../utils/ConstantTheme";

const ResetPasswordInfo = () => {
  return (
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
      <Typography
        component="h1"
        variant="h5"
        sx={{ mt: 2, textAlign: "center" }}
      >
        Reset password link send<br></br> to your email
      </Typography>
    </Box>
  );
};

export default ResetPasswordInfo;
