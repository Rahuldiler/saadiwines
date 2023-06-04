import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "../Common/TestimonialCard";
import "swiper/css/bundle";

function Feedbacks() {
  const dummyData = [
    {
      name: "Raj Malhotra",
      description: "Shaadivines really rescued us in my daughters wedding. I could never imagine such a\n" +
          "good use of tech to solve basic day to day life problems. Kudos to the team.",
      image: "/assets/placeholder.png"
    },
    {
      name: "Sanjana Rawat",
      description: "I must say, I have saved atleast 30-40% of my budget due to impeccable planning\n" +
          "done by Shaadivines Team. Specially their guests invite and RSVP feature helped us\n" +
          "get accurate guests list and we catered accordingly.",
      image: "/assets/placeholder.png"
    },
    {
      name: "Akshay Agrawal",
      description: "My sisters wedding was one of the most special day for me and weddingvines saved\n" +
          "our day.\n" +
          "Everyone was amazed with wedding website as rarely anyone has seen something like\n" +
          "this in India",
      image: "/assets/placeholder.png"
    },
  ];
  const [step, setStep] = useState(1);
  return (
    <section
      style={{
        background: "#FFF9F5",
      }}
      id="reviews"
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ py: { lg: 10, xs: "40px" } }}>
          <Typography
            variant="h2"
            className="vibeFont"
            sx={{ color: "#bc8129", mt: 2, textAlign: "center" }}
          >
            What our client say
          </Typography>

          {/* <Typography variant="body1" sx={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet,
          </Typography> */}
        </Box>
        <Box sx={{ pb: 10, mx: { lg: 14, xs: 2 } }}>
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
            {dummyData.map((data, index) => {
              return (
                <SwiperSlide key={index} style={{ width: "300px" }}>
                  <TestimonialCard data={data} />
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
      </Box>
    </section>
  );
}

export default Feedbacks;
