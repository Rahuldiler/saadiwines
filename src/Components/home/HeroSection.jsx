import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import styles from "../../styles/Home.module.css";

function HeroSection() {
  const [wedsiteVisible, setWedsiteVisible] = useState(false);
  const [oppsText, setOppsText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOppsText(true);
    }, 1600);
    setTimeout(() => {
      setWedsiteVisible(true);
    }, 2600);
  }, []);
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
            position: "relative", // for typewriter text
          }}
        >
          Lets create your
          <Typography
            variant="span"
            className={`${oppsText && "typewriter-text"}`}
            sx={{
              display: "inline-block",
              pl: 1,
              fontWeight: 500,
            }}
          >
            <Typewriter
              options={{
                delay: 60,
              }}
              onInit={(typewriter) => {
                typewriter.typeString("Wedding Card").start();
              }}
            />
          </Typography>
          {oppsText && (
            <Typography
              variant="span"
              className="blink-animation"
              sx={{
                display: "inline-block",
                position: "absolute",
                top: { lg: "-35px", xs: "20px" },
                left: { lg: "60%", xs: "270px" },
                ml: 1,
                fontWeight: 500,
                color: "#F20B3F",
                fontSize: { lg: "40px", xs: "20px" },
              }}
            >
              OPPS
            </Typography>
          )}
          <Typography
            variant="span"
            sx={{
              fontWeight: 500,
            }}
          >
            {wedsiteVisible && (
              <Typewriter
                options={{
                  delay: 40,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Wedsite - Personalised wedding website")
                    .start();
                }}
              />
            )}
          </Typography>
        </Typography>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span class="typewriter">
            Lets create your
            <h1>Wedsite Personalised wedding website invitation</h1>
          </span>
        </Box> */}

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
        <Box sx={{ height: "600px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { lg: "1000px", xs: "100%" },
              mx: "auto",
            }}
          >
            {wedsiteVisible && (
              <Image
                alt="img"
                width={1000}
                height={1000}
                className="fade-in-animation"
                src="/assets/gif/gif-hero-section.gif"
                style={{ width: "100%", height: "100%" }}
              />
            )}

            {!wedsiteVisible && (
              <Image
                alt="img"
                width={1000}
                height={1000}
                className={`${oppsText && "fadeout-animation"}`}
                src="/assets/tradational-wedding-card.webp"
                style={{
                  width: "100%",
                  height: "100%",
                  paddingTop: "50px",
                }}
              />
            )}
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
