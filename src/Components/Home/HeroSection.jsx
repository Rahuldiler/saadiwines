import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
function HeroSection() {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            backgroundColor: "rgb(0, 0, 0)",
            zIndex: 3,
            opacity: 0.5,
          }}
        ></Box>
        <Box
          sx={{
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "center",
            alignContent: "center",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            height: "100vh",
            width: "100vw",
            textAlign: "center",
          }}
        >
          <Typography variant="h1" className="vibeFont" sx={{ color: "#fff" }}>
            Plan your forever, better.
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff", fontSize: "18px" }}>
            Design a personalized website, create an all-in-one registry, and
            <br></br>
            experience wedding planning the way it should be.
          </Typography>
          <Box sx={{ marginTop: "40px" }}>
            <Button
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                marginLeft: "10px",
                padding: "7px 26px",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#E21A9E",
                  border: "1px solid #E21A9E",
                },
              }}
            >
              <Link
                href="#services"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Explore
              </Link>
            </Button>
          </Box>
        </Box>
        {/* <Box style={{ width: "100vw", height: "100vh", objectFit: "cover" }}>
          <video
            src="https://download-video.akamaized.net/2/playback/9a87984f-dbd2-44c2-a0a6-1c85a286fa80/94779c32-673baa53?__token__=st=1684926149~exp=1684940549~acl=%2F2%2Fplayback%2F9a87984f-dbd2-44c2-a0a6-1c85a286fa80%2F94779c32-673baa53%2A~hmac=5704c4cef8aca0638d5c93f024f7f8ec06315677f9f4565740b515b50b106712&r=dXMtZWFzdDE%3D"
            loop=""
            autoplay=""
            preload="auto"
            poster=""
            playsinline=""
            style={{
              width: "100vw",
              height: "100vh",
            }}
          ></video>
        </Box> */}
        <Image
          alt="img"
          width={1000}
          height={1000}
          src="/assets/weddingimg1.jpg"
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />

        <Image
          alt="img"
          width={1000}
          height={1000}
          src="/assets/whitepaper.svg"
          style={{
            position: "absolute",
            zIndex: 4,
            bottom: -5,
            width: "100%",
            height: "auto",
            left: 0,
          }}
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
