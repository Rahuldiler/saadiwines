import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import GuestListCard from "../Common/GuestListCard";
import Image from "next/image";

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
      info: "See guests’ RSVPs, who has opened your invite,  all in one place.",
      img: "/assets/placeholder.png",
    },
  ];
  return (
    <section id="guest-management">
      <Box>
        <Box
          className="layoutMargin"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            py: { lg: 16, xs: 10 },
            px: { lg: "0px", xs: "40px" },
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
            Solving the most critical problem of wedding is guest management.
            With easy contact exports, we create your wedding guest list,
            segregated into different categories like family, work, friends etc.
            Use this feature to send your invitations in 1 click to all guests
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
        <Box
          className="layoutMargin"
          sx={{ pb: 10, px: { lg: 0, xs: "20px" } }}
        >
          <Image
            alt="img"
            width={1000}
            height={1000}
            src="/assets/placeholder.png"
            className="imgResGuest"
            style={{ width: "100%", height: "700px", borderRadius: "20px" }}
          />
        </Box>
      </Box>
      <Box sx={{ py: 10, background: "#FFF9F5" }}>
        <Box className="layoutMargin" sx={{ px: { lg: 0, xs: "20px" } }}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Everything guest at <br></br>a glance.
          </Typography>
          <Grid container spacing={{ lg: 8, xs: 0 }}>
            {guestLists.map((guestList, index) => {
              return (
                <Grid lg={4} item key={index}>
                  <GuestListCard guestList={guestList} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </section>
  );
}

export default GuestList;
