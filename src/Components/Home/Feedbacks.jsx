import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "../Common/TestimonialCard";

function Feedbacks() {
  const dummyData = [
    {
      title: "Introduction to Figma1",
      img: "/assets/placeholder.png",
      time: "08 hr 12 mins",
      completed: 50,
    },
    {
      title: "Design Principles: Lea..2",
      img: "/assets/placeholder.png",
      time: "08 hr 12 mins",
      completed: 60,
    },
    {
      title: "Introduction to Figma3",
      img: "/assets/placeholder.png",
      time: "08 hr 12 mins",
      completed: 80,
    },
    {
      title: "Design Principles: Lea..4",
      img: "/assets/placeholder.png",
      time: "08 hr 12 mins",
      completed: 20,
    },
    {
      title: "Introduction to Figma5",
      img: "/assets/placeholder.png",
      time: "08 hr 12 mins",
      completed: 50,
    },
    {
      title: "Design Principles: Lea..6",
      img: "/assets/placeholder.png",
      time: "08 hr 12 mins",
      completed: 60,
    },
  ];
  const [step, setStep] = useState(1);
  return (
    <section
      style={{
        background: "#FFF9F5",
      }}
    >
      <Box sx={{ width: "100%" }} className="layoutMargin">
        <Box sx={{ py: { lg: 10, xs: "40px" } }}>
          <Typography
            variant="h2"
            className="vibeFont"
            sx={{ color: "#bc8129", mt: 2, textAlign: "center" }}
          >
            What our client say
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet,
          </Typography>
        </Box>
        <Box sx={{ pb: 10 }}>
          <Swiper
            spaceBetween={0}
            initialSlide={step}
            loop={true}
            grid={{
              rows: 1,
              fill: "row",
            }}
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Grid, Navigation, Pagination, Autoplay]}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={handleOnSetSwiper}
          >
            {dummyData.map((data, index) => {
              return (
                <SwiperSlide key={index} style={{ width: "300px" }}>
                  <TestimonialCard data={data} />
                </SwiperSlide>
              );
            })}
            <div className="container-dots" style={{ marginTop: "60px" }}>
              <div className="custom-pagination"></div>
            </div>
          </Swiper>
        </Box>
      </Box>
    </section>
  );
}

export default Feedbacks;
