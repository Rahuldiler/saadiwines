import { Box, Link } from "@mui/material";
import Image from "next/image";
import React from "react";

function VideoInviTemplate() {
  const templateDesign = [
    {
      id: 2,
      video:
        "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/WhatsApp+Video+2023-05-27+at+12.19.28+PM.mp4",
      url: "/",
    },
    {
      id: 1,
      video:
        "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/WhatsApp+Video+2023-05-27+at+12.29.04+PM.mp4",
      url: "/",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        pb: 8,
      }}
    >
      {templateDesign.map((listOfImg, index) => {
        return (
          <Box
            sx={{
              flex: { lg: "1 1 20%", xs: "1 1 50%" },
              display: "flex",
              justifyContent: "center",
              borderRadius: "7px",
            }}
            key={listOfImg.id}
          >
            <Link
              href={listOfImg.url}
              sx={{
                px: { lg: 8, xs: "20px" },
                py: { lg: 4, xs: "20px" },
                // "&:hover": {},
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
                <source src={listOfImg.video} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default VideoInviTemplate;
