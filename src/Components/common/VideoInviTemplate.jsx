import { Box, Link } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Script from "next/script";
import ReactPlayer from "react-player";

function VideoInviTemplate() {
  const templateDesign = [
    {
      id: 2,
      video:
        "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/WhatsApp+Video+2023-05-27+at+12.19.28+PM.mp4",
      url: "/",
    },
    {
      id: 1,
      video:
        "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/WhatsApp+Video+2023-05-27+at+12.29.04+PM.mp4",
      url: "/",
    },
    {
      id: 3,
      video:
        "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/WhatsApp+Video+2023-05-27+at+12.19.28+PM.mp4",
      url: "/",
    },
    {
      id: 4,
      video:
        "https://sv-landing-page-assets.s3.eu-north-1.amazonaws.com/WhatsApp+Video+2023-05-27+at+12.29.04+PM.mp4",
      url: "/",
    },
  ];
  const [step, setStep] = useState(1);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target.id == "myvideo") {
          if (entry.isIntersecting) {
            entry.target.play();
            entry.target.muted = false;
          } else {
            entry.target.pause();
            entry.target.muted = true;
          }
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    const videos = document.querySelectorAll("video");

    videos.forEach((vide) => {
      observer.observe(vide);
    });
  }, []);

  return (
    <Box
      className="layoutMargin"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        pb: 8,
      }}
    >
      {/* {templateDesign.map((listOfImg, index) => {
        return (
          <Box
            sx={{
              flex: { lg: "1 1 20%", xs: "1 1 50%" },
              display: "flex",
              justifyContent: "center",
              borderRadius: "7px",
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
              <video
                autoPlay
                loop
                controls
                muted
                width="100%"
                style={{
                  borderRadius: "10px",
                  width: "500px",
                  height: "300px",
                  objectFit: "cover",
                  boxShadow: "-1px 6px 25px #f8dcee",
                }}
              >
                <source src={listOfImg.video} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </Link>
          </Box>
        );
      })} */}

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
            slidesPerView: 1,
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

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={handleOnSetSwiper}
      >
        {templateDesign.map((listOfImg, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  flex: { lg: "1 1 100%", xs: "1 1 100%" },
                  display: "flex",
                  justifyContent: "center",
                }}
                key={listOfImg.id}
              >
                <Box
                  sx={{
                    px: { lg: 8, xs: "20px" },
                    py: { lg: 4, xs: "20px" },
                    // "&:hover": {},
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    controls
                    className="video"
                    id="myvideo"
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      boxShadow: "-1px 6px 25px #f8dcee",
                    }}
                  >
                    <source src={listOfImg.video} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                </Box>
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

export default VideoInviTemplate;
