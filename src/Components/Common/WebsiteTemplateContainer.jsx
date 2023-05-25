import { Box, Grid, Link } from "@mui/material";
import React from "react";

function WebsiteTemplateContainer() {
  const templateDesign = [
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
    {
      img: "/assets/placeholder.png",
      url: "/",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        pb: 10,
      }}
    >
      {templateDesign.map((listOfImg, index) => {
        return (
          <Box
            sx={{
              flex: "1 1 25%",
              display: "flex",
              justifyContent: "center",
            }}
            key={index}
          >
            <Link
              href={listOfImg.url}
              sx={{
                px: 8,
                py: 4,
                // "&:hover": {},
              }}
            >
              <img
                className="imgHover"
                src={listOfImg.img}
                style={{ height: "auto", width: "100%", borderRadius: "7px" }}
              />
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default WebsiteTemplateContainer;
