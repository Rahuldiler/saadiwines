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
import styles from "../../styles/Home.module.css";

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
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("WEDsite - Personalised wedding website")
                  .start();
              }}
            />
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { lg: "850px", xs: "100%" },
            mx: "auto",
          }}
        >
          <Image
            alt="img"
            width={1000}
            height={1000}
            src="/assets/gif/gif-hero-section.gif"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
