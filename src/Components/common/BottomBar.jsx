import { Grid, Typography } from "@mui/material";
import React from "react";

function BottomBar() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} lg={6}>
        <Typography
          sx={{ pl: 4, textAlign: "start", zIndex: 5, position: "relative" }}
        >
          © 2023 Shaadi Vines. All Rights Reserved.
        </Typography>
      </Grid>
      <Grid item xs={6} lg={6}>
        <Typography
          sx={{ pr: 4, textAlign: "end", zIndex: 5, position: "relative" }}
        >
          This cover has been designed using assets from Freepik.com
        </Typography>
      </Grid>
    </Grid>
  );
}

export default BottomBar;
