import * as React from "react";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import LinearProgress from "@mui/material/LinearProgress";

export default function BorderLinearProgress({ progress }) {
  // console.log(progress);
  // const [progress1, setProgress1] = React.useState(
  //   progress > 100 ? 100 : progress
  // );
  // // const [invertedProgress, setInvertedProgress] = React.useState(100);
  // const [color, setColor] = React.useState(progress1 >= 100 ? "red" : "green");
  return (
    <>
      <Stack sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={progress > 100 ? 100 : progress}
          sx={{
            backgroundColor: `rgb(${'green'},0.4)`,
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
