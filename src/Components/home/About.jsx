import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useEffect } from "react";

function About() {
  const video = "/videos/about-us.mp4";
  const listData = [
    "WEDsite",
    "WEDcast",
    "Video Invite",
    "Budget Planner",
    "Guest Management",
    "RSVP",
  ];
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target.id == "myvideo") {
          if (entry.isIntersecting) {
            entry.target.play();
            // entry.target.muted = false;
          } else {
            entry.target.pause();
            // entry.target.muted = true;
          }
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    const videos = document.querySelectorAll("video");

    videos.forEach((vide) => {
      observer.observe(vide);
    });
  }, []);

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "7px",
              }}
            >
              <video
                autoPlay
                loop
                muted
                width="100%"
                style={{
                  borderRadius: "10px",
                  width: "350px",
                  height: "auto",
                  objectFit: "cover",
                  boxShadow: "-1px 6px 25px #f8dcee",
                }}
              >
                <source src={video} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </Box>
            {/* <Box
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
            ></Box> */}
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
                {list}
                {/* {list === "WEDsite" && <sup>TM</sup>}
                {list === "Wedcast" && <sup>Live</sup>} */}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
