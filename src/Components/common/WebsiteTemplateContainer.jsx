import { Box, Grid, Link } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import TestimonialCard from "./TestimonialCard";

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
    {
      id: 4,
      img: "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/Screenshot+2023-05-27+at+11.38.02+AM.png",
      url: "/",
    },
    {
      id: 5,
      img: "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/Screenshot+2023-05-27+at+11.59.18+AM.png",
      url: "/",
    },
    {
      id: 6,
      img: "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/Screenshot+2023-05-27+at+12.00.52+PM.png",
      url: "/",
    },
  ];

  const [step, setStep] = useState(1);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        pb: { lg: 10, xs: 0 },
      }}
    >
      <Swiper
        spaceBetween={0}
        initialSlide={step}
        loop={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={handleOnSetSwiper}
      >
        {templateDesign.map((listOfImg, index) => {
          return (
            <SwiperSlide key={index} style={{ width: "300px" }}>
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
                    style={{
                      height: "auto",
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      borderRadius: "7px",
                      boxShadow: "-1px 6px 25px #f8dcee",
                    }}
                  />
                </Link>
              </Box>
            </SwiperSlide>
          );
        })}
        {/* <div className="container-dots" style={{ marginTop: "60px" }}>
              <div className="custom-pagination"></div>
            </div> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </Box>
  );
}

export default WebsiteTemplateContainer;
