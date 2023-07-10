import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function BorderLinearProgress({ progress }) {
  return (
    <>
      <Stack sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={progress > 100 ? 100 : progress}
          sx={{
            backgroundColor: `rgb(${"green"},0.4)`,
            height: "10px",
            borderRadius: "10px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: progress >= 100 ? "red" : "green",
              height: "10px",
              borderRadius: "10px",
            },
          }}
        />
      </Stack>
    </>
  );
}
