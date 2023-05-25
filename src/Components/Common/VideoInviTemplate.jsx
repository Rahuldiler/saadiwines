import { Box, Link } from "@mui/material";
import React from "react";

function VideoInviTemplate() {
  const templateDesign = [
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
    {
      img: "/assets/gold-confetti_inv.webp",
      url: "/",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        pb: 8,
      }}
    >
      {templateDesign.map((listOfImg, index) => {
        return (
          <Box
            sx={{
              flex: "1 1 20%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "7px",
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
                src={listOfImg.img}
                className="imgHover"
                style={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "7px",
                }}
              />
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default VideoInviTemplate;
