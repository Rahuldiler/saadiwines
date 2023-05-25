import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function ServiceListCard({ list }) {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          "&:hover": {
            color: "#bc8129",
            cursor: "pointer",
          },
          mt: 4,
          fontSize: "24px",
          mt: 0,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {list.title} <ArrowForwardIcon />
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Customize your invitation and choose 'send online'.
      </Typography>
    </Box>
  );
}

export default ServiceListCard;
