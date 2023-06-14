import { Typography } from "@mui/material";
import React from "react";

function BottomBar() {
  return (
    <Typography
      sx={{ textAlign: "center", p: 2, zIndex: 5, position: "relative" }}
    >
      © 2023 Shaadi Vines. All Rights Reserved.
    </Typography>
  );
}

export default BottomBar;
