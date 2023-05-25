import { Box, Typography } from "@mui/material";
import React from "react";

function GuestListCard({ guestList }) {
  return (
    <Box sx={{ background: "#FFF9F5", px: 6, py: 8, mt: 10 }}>
      <img src={guestList.img} style={{ width: "100%" }} />
      <Typography variant="h4" sx={{ textAlign: "center", py: 2 }}>
        {guestList.title}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {guestList.info}
      </Typography>
    </Box>
  );
}

export default GuestListCard;
