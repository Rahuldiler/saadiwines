import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function ServiceCard({ title, info, imgLeft, url }) {
  return (
    <Grid container sx={{ my: 10, mx: 10 }}>
      <Grid
        item
        lg={5}
        order={{ lg: imgLeft ? 1 : 2 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          ml: imgLeft ? "0px" : "80px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mt: 4,
            fontSize: "44px",
            fontWeight: 500,
            mt: 0,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, my: 4 }}>
          {info}
        </Typography>
        <Button
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #000",
            color: "#000",
            padding: "7px 26px",
            width: "100px",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#000",
            },
          }}
        >
          <Link href={url} sx={{ textDecoration: "none", color: "inherit" }}>
            Explore
          </Link>
        </Button>
      </Grid>
      <Grid
        item
        lg={5}
        order={{ lg: imgLeft ? 2 : 1 }}
        sx={{ ml: imgLeft ? "80px" : "0px" }}
      >
        <video
          style={{
            width: "480px",
            height: "480px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
          autoPlay
          loop
          muted
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
}
