import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function BottomBar() {
  return (
    <Box>
      <Typography
        sx={{
          pl: 4,
          textAlign: "start",
          zIndex: 5,
          textAlign: "center",
          position: "relative",
        }}
      >
        © 2023 Shaadi Vines. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default BottomBar;
