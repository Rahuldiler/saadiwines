import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function ServiceCard({ title, info, imgLeft, url, imgVid }) {
  return (
    <Grid
      container
      sx={{
        my: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        lg={5}
        order={{ lg: imgLeft ? 1 : 2, xs: 2 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          ml: { lg: imgLeft ? "0px" : "60px", xs: "0px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mt: 4,
            fontSize: "64px",
            fontWeight: 500,
            mt: { lg: "0px", xs: "20px" },
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
        order={{ lg: imgLeft ? 2 : 1, xs: 1 }}
        sx={{
          ml: { lg: imgLeft ? "60px" : "0px", xs: "0px" },
        }}
      >
        <video className="videoResponsiveService" autoPlay loop muted>
          <source src={imgVid} type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
}
