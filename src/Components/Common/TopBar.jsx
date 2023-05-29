import { Box } from "@mui/material";
import React from "react";

function TopBar() {
  return (
    <Box
      sx={{
        background: "#E8C5FF",
        textAlign: "center",
        position: "relative",
      }}
    >
      <span style={{ fontSize: "14px" }}>
        {/* <span style={{ fontWeight: 600, marginRight: "5px" }}>25% Off!</span> */}
        <span>Welcome</span>
      </span>
    </Box>
  );
}

export default TopBar;
