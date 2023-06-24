import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import WebsiteTemplateContainer from "../common/WebsiteTemplateContainer";
import Image from "next/image";

function WebsiteDesigningSection() {
  const heroImg = "/assets/webDesign.png";

  return (
    <section style={{ background: "#FBF8F8" }} id="services">
      <Box
        className="layoutMargin"
        sx={{ py: { lg: 10, xs: "20px" }, px: { lg: "0px", xs: "40px" } }}
      >
        <Grid container sx={{ my: 8 }}>
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
                Website Designing
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#000", fontSize: "18px" }}
              >
                In the era of digitisation, where from shopping to eating,
                everything can be done with the use of tech, why should your
                most important day of the life be devoid of technology?
                <br></br>
                Shaadivines introduces e-card, which is the coolest way of
                sending out invites to your guests. Say Bye to 2 page hard copy
                printed cards, and Hello to new age customised designed wedding
                website where people get to see your memorable story.
                <br></br>
                It can tell your beautiful love story, your relationship goals,
                milestones, itinerary, locations and much more…
              </Typography>
              {/* <Box sx={{ marginTop: "40px" }}>
                <Button
                  className="bg-[#E21A9E]"
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
              </Box> */}
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
                ml: { lg: "60px", xs: "0px" },
                height: { lg: "350px", xs: "200px" },
              }}
            >
              <Image
                src={heroImg}
                style={{
                  objectFit: "fill",
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
      <WebsiteTemplateContainer />
    </section>
  );
}

export default WebsiteDesigningSection;
