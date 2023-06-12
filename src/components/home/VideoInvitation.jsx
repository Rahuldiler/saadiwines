import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import VideoInviTemplate from "../common/VideoInviTemplate";
import Image from "next/image";

function VideoInvitation() {
  const heroImg = "/assets/placeholder.png";
  return (
    <section>
      <Box className="layoutMargin" id="video-invitation">
        <Grid
          container
          sx={{ py: { lg: 10, xs: "40px" }, px: { lg: "0px", xs: "40px" } }}
        >
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
                sx={{ color: "#bc8129", mt: { lg: 0, xs: "40px" } }}
              >
                Video Invitations
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#000", fontSize: "18px" }}
              >
                Your special day deserves a special invitation. There’s nothing
                like a captivating video to showcase your love story and get
                your guests excited to witness your special day.
                <br></br>
                Put together your favourite photos and videos, to include all
                the essential details of the day, then tie everything together
                with delightful music.
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
                mt: { lg: 0, xs: "40px" },
                width: "100%",

                height: { lg: "350px", xs: "200px" },
              }}
            >
              <Image
                src={heroImg}
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                alt="img"
                width={1000}
                height={1000}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <VideoInviTemplate />
    </section>
  );
}

export default VideoInvitation;
