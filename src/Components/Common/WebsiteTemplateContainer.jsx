import { Box, Grid, Link } from "@mui/material";
import Image from "next/image";
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
        pb: { lg: 10, xs: 0 },
      }}
    >
      {templateDesign.map((listOfImg, index) => {
        return (
          <Box
            sx={{
              flex: { lg: "1 1 25%", xs: "1 1 50%" },
              display: "flex",
              justifyContent: "center",
            }}
            key={index}
          >
            <Link
              href={listOfImg.url}
              sx={{
                px: { lg: 8, xs: "20px" },
                py: { lg: 4, xs: "20px" },
                // "&:hover": {},
              }}
            >
              <Image
                className="imgHover"
                alt="img"
                width={1000}
                height={1000}
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
