import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function BudgetCard({ budgetList }) {
  return (
    <Box
      sx={{
        background: "#FFF",
        px: 6,
        py: 8,
        mt: { lg: 10, xs: "40px" },
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "10px",
        height: "280px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={budgetList.img}
          style={{ width: "80px", height: "80px" }}
          alt="img"
          width={1000}
          height={1000}
        />
      </Box>
      <Typography variant="h4" sx={{ textAlign: "center", py: 2 }}>
        {budgetList.title}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {budgetList.info}
      </Typography>
    </Box>
  );
}

export default BudgetCard;
