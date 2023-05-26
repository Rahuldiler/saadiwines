import { Box, Link } from "@mui/material";
import Image from "next/image";
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
              flex: { lg: "1 1 20%", xs: "1 1 50%" },
              display: "flex",
              justifyContent: "center",
              borderRadius: "7px",
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
                src={listOfImg.img}
                alt="img"
                width={1000}
                height={1000}
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
