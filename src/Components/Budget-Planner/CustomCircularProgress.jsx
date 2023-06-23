import { CircularProgress } from "@mui/material";
import React from "react";

const CustomCircularProgress = () => {
  return (
    <CircularProgress
      sx={{ m: "auto", display: "flex", justifyContent: "center", my: 1 }}
    />
  );
};

export default CustomCircularProgress;
