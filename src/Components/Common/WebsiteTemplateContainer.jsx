import { Box, Grid, Link } from "@mui/material";
import Image from "next/image";
import React from "react";

function WebsiteTemplateContainer() {
  const templateDesign = [
    {
      id: 1,
      img: "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/Screenshot+2023-05-27+at+11.38.02+AM.png",
      url: "/",
    },
    {
      id: 2,
      img: "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/Screenshot+2023-05-27+at+11.59.18+AM.png",
      url: "/",
    },
    {
      id: 3,
      img: "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/Screenshot+2023-05-27+at+12.00.52+PM.png",
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
            key={listOfImg.id}
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
