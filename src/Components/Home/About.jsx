import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function About() {
  const listData = [
    "Smart e-card (Wedding website)",
    "V-Card (Video card)",
    "Budget Planner",
    "Guest Management",
    "RSVP",
    "Photos organiser",
  ];
  return (
    <section id="about">
      <Typography
        variant="h2"
        className="vibeFont"
        sx={{ color: "#bc8129", mt: 10, textAlign: "center" }}
      >
        About Us
      </Typography>

      {/* <Typography variant="body1" sx={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet,
      </Typography> */}
      {/* <Grid container sx={{ my: 10 }} className="layoutMargin">
        <Grid lg={6}>
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
            <Box
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              <Typography variant="h4" sx={{ color: "#bc8129" }}>
                What we're all about
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid lg={6}>
          <Image
            alt="img"
            width={1000}
            height={1000}
            src="/assets/weddingimg5.jpg"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "7px",
            }}
          />
        </Grid>
      </Grid> */}

      <Grid
        container
        className="layoutMargin"
        sx={{ my: 10, px: { lg: 0, xs: "20px" } }}
      >
        <Grid lg={6} item>
          <Box
            sx={{ minHeight: "350px", height: "100%", position: "relative" }}
          >
            <Image
              src="/assets/weddingimg5.jpg"
              alt="about e-brainee"
              width={1000}
              height={1000}
              className="imgResAbout"
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "7px",
                objectFit: "cover",
                position: "relative",
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                width: "100px",
                height: "200px",
                position: "absolute",
                background: "#BC8129",
                top: "20px",
                right: "-10px",
                borderRadius: "7px",

                zIndex: 1,
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid
          lg={6}
          item={true}
          sx={{
            paddingLeft: { lg: "80px", xs: 0 },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            height: "auto",
          }}
        >
          {/* <Typography variant="h3">Metus interdum metus</Typography> */}
          <Typography variant="body2" sx={{ margin: "20px 0px" }}>
            Welcome to ShaadiVines, where we blend the beauty of weddings with
            the power of technology. We are passionate about transforming the
            wedding experience for couples and their guests, creating
            unforgettable moments and simplifying the planning process.
            <br></br>
            At ShaadiVines we believe in the power of data analytics and
            personalization. By harnessing the insights gained from wedding
            trends, guest preferences, and behavior, we continually refine our
            solutions to deliver tailored experiences that exceed expectations.
          </Typography>
          <List style={{ columns: 2 }}>
            {listData.map((list, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    background: "transparent",
                    color: "#101828",
                    padding: "8px 0px",
                  }}
                >
                  <Image
                    src="/assets/icons8-checkmark.svg"
                    alt="tick"
                    width={20}
                    height={20}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  ></Image>

                  {list}
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
