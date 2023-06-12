import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function GuestListCard({ guestList }) {
  return (
    <Box
      sx={{
        background: "#fff",
        px: 6,
        py: 8,
        mt: { lg: 10, xs: "40px" },
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "10px",
      }}
    >
      <Image
        src={guestList.img}
        style={{ width: "100%", height: "200px", borderRadius: "10px" }}
        alt="img"
        width={1000}
        height={1000}
      />
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
