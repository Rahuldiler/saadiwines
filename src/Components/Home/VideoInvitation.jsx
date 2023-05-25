import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import VideoInviTemplate from "../Common/VideoInviTemplate";

function VideoInvitation() {
  return (
    <section>
      <Box className="layoutMargin" id="video-invitation">
        <Grid container sx={{ my: 10 }}>
          <Grid item lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h2"
                className="vibeFont"
                sx={{ color: "#bc8129" }}
              >
                Video Invitations
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#000", fontSize: "18px" }}
              >
                Design a personalized website, create an all-in-one registry,
                and
                <br></br>
                experience wedding planning the way it should be.
              </Typography>
              <Box sx={{ marginTop: "40px" }}>
                <Button
                  sx={{
                    backgroundColor: "#E21A9E",
                    color: "#fff",
                    padding: "7px 26px",
                    marginRight: "10px",
                  }}
                >
                  Getting Started
                </Button>
                <Button
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid #000",
                    color: "#000",
                    marginLeft: "10px",
                    padding: "7px 26px",
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                background: "#fff",
                p: 1,
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                display: "flex",
                alignItem: "center",
              }}
            >
              <video
                autoPlay
                loop
                muted
                width="100%"
                style={{
                  borderRadius: "10px",
                }}
              >
                <source src="/assets/video.mp4" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <VideoInviTemplate />
    </section>
  );
}

export default VideoInvitation;
