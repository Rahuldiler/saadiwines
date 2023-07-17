import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
function HeroSection() {
  return (
    <Box>
      <Box sx={{ position: "relative", mt: 10 }}>
        {/* <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            // backgroundColor: "rgb(0, 0, 0)",
            zIndex: 3,
            // opacity: 0.5,
          }}
        ></Box> */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { lg: "50px", xs: "28px" },
            textAlign: "center",
            mb: 5,
            mt: 15,
            mx: 2,
          }}
        >
          Lets create your
          <Typography
            variant="span"
            sx={{ display: "inline-block", pl: 1, fontWeight: 500 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Wedsite - Personalised wedding website",
                  "Wedding Invitation",
                  "Budget Planner",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(250).deleteAll().start();
              }}
            />
          </Typography>
        </Typography>
        {/* <Typewriter
          text={[
            "Wedsite Personalised wedding website invitation",
            "Wedding Invitation",
            "Budget Planner",
          ]}
          delay={3000}
          loop={true}
        /> */}

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mx: { lg: 0, xs: 4 },
          }}
        >
          <Image
            alt="img"
            width={1000}
            height={1000}
            src="/assets/hero-img.jpeg"
            style={{ width: "900px", height: "auto" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: { lg: 25, xs: 10 },
              left: { lg: 680, xs: 105 },
              width: { lg: "615px", xs: "240px" },
              height: "auto",
            }}
          >
            <Image
              alt="img"
              width={1000}
              height={1000}
              src="/assets/gif/shaadivines-15sec.gif"
              style={{
                borderRadius: "10px 10px 0px 0px",
              }}
            />
          </Box>
        </Box>
        {/* <Image
          alt="img"
          width={1000}
          height={1000}
          src="/assets/whitepaper.svg"
          style={{
            position: "absolute",
            zIndex: 4,
            bottom: -20,
            width: "100%",
            height: "auto",
            left: 0,
          }}
        /> */}
      </Box>
    </Box>
  );
}

export default HeroSection;
