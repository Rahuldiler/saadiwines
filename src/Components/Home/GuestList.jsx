import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import GuestListCard from "../Common/GuestListCard";

function GuestList() {
  const guestLists = [
    {
      title: "Organize your guests.",
      info: "Assign plus ones, group families and dates together, and organize guests with tags.",
      img: "/assets/placeholder.png",
    },
    {
      title: "Communicate with your guests.",
      info: "Send Save the Dates, invites, custom eCards and more, right from your guest list.",
      img: "/assets/placeholder.png",
    },
    {
      title: "Track your guests’ responses.",
      info: "See guests’ RSVPs, who has opened your invite, and who’s purchased a gift from your registry, all in one place.",
      img: "/assets/placeholder.png",
    },
  ];
  return (
    <section style={{}} id="guest-management">
      <Box sx={{ background: "#FBF8F8" }}>
        <Box
          className="layoutMargin"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            py: 16,
          }}
        >
          <Typography
            variant="h2"
            className="vibeFont"
            sx={{ color: "#bc8129" }}
          >
            Guest Management
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#000", fontSize: "18px", mt: 2 }}
          >
            Design a personalized website, create an all-in-one registry, and
            <br></br>
            experience wedding planning the way it should be.
          </Typography>
          <Box sx={{ marginTop: "40px" }}>
            <Button
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #E21A9E",
                color: "#E21A9E",
                marginLeft: "10px",
                padding: "7px 26px",
              }}
            >
              Explore
            </Button>
          </Box>
        </Box>
        <Box className="layoutMargin" sx={{ pb: 10 }}>
          <img
            src="/assets/placeholder.png"
            style={{ width: "100%", height: "700px", borderRadius: "20px" }}
          />
        </Box>
      </Box>
      <Box className="layoutMargin" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Everything guest at <br></br>a glance.
        </Typography>
        <Grid container spacing={8}>
          {guestLists.map((guestList, index) => {
            return (
              <Grid lg={4} item key={index}>
                <GuestListCard guestList={guestList} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
}

export default GuestList;
