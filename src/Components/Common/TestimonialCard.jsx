import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function TestimonialCard({ data }) {
  return (
    <Box
      sx={{
        p: { lg: "30px 60px", xs: "20px 40px" },
        background: "#FFF",
        boxShadow: "-1px 6px 25px #f8dcee",
        borderRadius: "10px",
        m: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Avatar
          src="/assets/placeholder.png"
          alt="avatar"
          sx={{
            width: { lg: "80px", xs: "60px" },
            height: { lg: "80px", xs: "60px" },
            mr: 4,
          }}
        ></Avatar>
        <Box>
          <Typography
            sx={{ fontSize: "24px", color: "#101828", fontWeight: 600 }}
          >
            Carlos Martin
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#00000060", fontWeight: 500 }}
          >
            Lorem ipsum dolor sit amet,
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          color: "#00000060",
          fontWeight: 600,
          textAlign: "start",
          ml: { lg: 4, xs: 2 },
          "&:before, &:after": {
            fontFamily: "Revalia",
            color: "#f0d7b260",
            fontSize: "100px",
            position: "absolute",
          },
          "&:before": {
            content: `"“"`,
            top: { lg: "40px", xs: "60px" },
            right: "60px",
          },
        }}
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
        turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed ris."
      </Typography>
    </Box>
  );
}

export default TestimonialCard;
