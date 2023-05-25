import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import ServiceListCard from "../Common/ServiceListCard";
import ServiceCard from "../Common/ServiceCard";

function ServicesSection() {
  const serviceLists = [
    {
      title: "Website Designing",
      info: "Produced with rich, radiant inks and high-quality, weatherproof vinyl, our custom die cut stickers are available in any shape or size. Further elevate your custom-shaped stickers with beautiful matte and gloss coatings.",
      imgVid: "/assets/weddingimg3.png",
      imgLeft: false,
      url: "#website-designing",
    },
    {
      title: "Video Invitation",
      info: "Produced with rich, radiant inks and high-quality, weatherproof vinyl, our custom die cut stickers are available in any shape or size. Further elevate your custom-shaped stickers with beautiful matte and gloss coatings.",
      imgVid: "/assets/weddingimg3.png",
      imgLeft: true,
      url: "#video-invitation",
    },
    {
      title: "Budget Planning",
      info: "Produced with rich, radiant inks and high-quality, weatherproof vinyl, our custom die cut stickers are available in any shape or size. Further elevate your custom-shaped stickers with beautiful matte and gloss coatings.",
      imgVid: "/assets/weddingimg3.png",
      imgLeft: false,
      url: "#budget-planning",
    },
    {
      title: "Guest Management",
      info: "Produced with rich, radiant inks and high-quality, weatherproof vinyl, our custom die cut stickers are available in any shape or size. Further elevate your custom-shaped stickers with beautiful matte and gloss coatings.",
      imgVid: "/assets/weddingimg3.png",
      imgLeft: true,
      url: "#guest-management",
    },
  ];
  return (
    <section className="layoutMargin" id="services">
      <Box>
        <Typography
          variant="h2"
          className="vibeFont"
          sx={{ color: "#bc8129", mt: 2, textAlign: "center" }}
        >
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Customize your invitation and choose 'send online' to create your
          event.
        </Typography>

        {serviceLists.map((list, index) => {
          return (
            <ServiceCard
              key={index}
              title={list.title}
              info={list.info}
              img={list.img}
              imgLeft={list.imgLeft}
              url={list.url}
            />
          );
        })}

        {/* <Grid container sx={{ my: 8 }}>
          <Grid item lg={2}></Grid>
          <Grid item lg={4}>
            <Box>
              <video
                style={{
                  width: "380px",
                  height: "380px",
                  objectFit: "cover",
                }}
                autoPlay
                loop
                muted
              >
                <source src="/assets/video.mp4" type="video/mp4" />
              </video>
            </Box>
          </Grid>

          <Grid item lg={4}>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 0,
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              {serviceList.map((list, index) => {
                return (
                  <ListItem key={index} sx={{ p: 0 }}>
                    <ServiceListCard list={list} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid> */}
      </Box>
    </section>
  );
}

export default ServicesSection;
