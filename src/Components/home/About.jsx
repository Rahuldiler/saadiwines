import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function About() {
  const listData = [
    "WEDsite",
    "V-Card (Video card)",
    "Budget Planner",
    "Guest Management",
    "Wedcast",
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
              src="/assets/About us image copy.webp"
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
            />
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
          <Typography variant="body2" sx={{ margin: "20px 0px" }}>
            Welcome to ShaadiVines, where we blend the beauty of weddings with
            the power of technology. We are passionate about transforming the
            wedding experience for couples and their guests, creating
            unforgettable moments and simplifying the planning process.
            <br />
            At ShaadiVines, we believe in the power of data analytics and
            personalization. By harnessing the insights gained from wedding
            trends, guest preferences, and behavior, we continually refine our
            solutions to deliver tailored experiences that exceed expectations.
          </Typography>
          <List style={{ columns: 2 }}>
            {listData.map((list, index) => (
              <ListItem
                key={index}
                sx={{
                  background: "transparent",
                  color: "#101828",
                  padding: "8px 0px",
                }}
              >
                <TaskAltIcon
                  sx={{
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                    color: "green",
                  }}
                />
                {list} {list === "WEDsite" && <sup>TM</sup>}
                {list === "Wedcast" && <sup>Live</sup>}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
