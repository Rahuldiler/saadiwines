import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";

function GreenStrip({
  title,
  text,
  img,
  propName,
  theme,
  themeColor,
  targetDate,
  weddingDayURL,
  waterColorIMG,
  swiperSlide1,
  swiperSlide2,
  swiperSlide3,
  swiperSlide4,
  swiperSlide5,
  swiperSlide6,
}) {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getThemeImage = () => {
    const imageUrl = "/images/bg-watercolor-02.jpg";
    image.src = imageUrl;

    image.addEventListener("load", () => {
      applyColorManipulation(image);
    });

    function applyColorManipulation(imageElement) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = imageElement.width;
      canvas.height = imageElement.height;
      ctx.drawImage(imageElement, 0, 0);
      document.body.appendChild(canvas);
    }
  };

  return (
    <div
      style={{ backgroundColor: theme.bgColor, backgroundImage: weddingDayURL }}
      className={`p-12  bg-no-repeat lg:flex relative`}
    >
      <div
        className="absolute bg-[center_top] w-full h-full bg-no-repeat bg-cover opacity-100 mix-blend-multiply top-0 left-0 "
        // style={{ backgroundImage: "url('/images/bg-watercolor-02.jpg')" }}
        style={{ backgroundImage: waterColorIMG }}
      ></div>
      <div
        style={{ color: theme.textColor }}
        className={` ${
          propName === "clock" ? "lg:w-[30%]" : "lg:w-[50%]"
        } lg:w-[30%]  lg:flex items-center `}
      >
        {/* <img
          src={img}
          alt="glasses"
          className="w-24 h-20 mr-3 mb-6 hidden lg:block"
        /> */}
        <Image
          src={img}
          alt="glasses"
          width={24}
          height={20}
          // layout="fill"
          className="w-24 h-20 mr-3 mb-6 hidden lg:block"
        />
        <div className="text-center lg:text-left">
          <p className="text-[14px] lg:!text-base mb-3">{text}</p>
          <p className="!font-Alex !text-[35px] ">{title}</p>
        </div>
      </div>
      {propName !== "clock" && (
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper "
        >
          <SwiperSlide>
            {/* <img
              src={swiperSlide1}
              alt=""
              className="w-52 h-20 object-contain"
            /> */}
            <Image
              src={swiperSlide1}
              alt=""
              width={52}
              height={20}
              // layout="fill"
              className="w-52 h-20 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* <img
              src={swiperSlide2}
              alt=""
              className="w-52 h-20 object-contain"
            /> */}
            <Image
              src={swiperSlide2}
              alt=""
              width={52}
              height={20}
              // layout="fill"
              className="w-52 h-20 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* <img
              src={swiperSlide3}
              alt=""
              className="w-52 h-20 object-contain"
            /> */}
            <Image
              src={swiperSlide3}
              alt=""
              width={52}
              height={20}
              // layout="fill"
              className="w-52 h-20 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* <img
              src={swiperSlide4}
              alt=""
              className="w-52 h-20 object-contain"
            /> */}
            <Image
              src={swiperSlide4}
              alt=""
              width={52}
              height={20}
              // layout="fill"
              className="w-52 h-20 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* <img
              src={swiperSlide5}
              alt=""
              className="w-52 h-20 object-contain"
            /> */}
            <Image
              src={swiperSlide5}
              alt=""
              width={52}
              height={20}
              // layout="fill"
              className="w-52 h-20 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* <img
              src={swiperSlide6}
              alt=""
              className="w-52 h-20 object-contain"
            /> */}
            <Image
              src={swiperSlide6}
              alt=""
              width={52}
              height={20}
              // layout="fill"
              className="w-52 h-20 object-contain"
            />
          </SwiperSlide>
        </Swiper>
      )}

      {propName === "clock" && (
        <div
          style={{ color: theme.textColor }}
          className={` text-[20px] lg:w-[70%] grid grid-cols-4 text-center`}
        >
          <div>
            <p className="!font-Alex !text-[30px] lg:!text-[60px]">
              {timeRemaining.days}
            </p>
            <p className="!text-[10px] lg:!text-base">DAYS</p>
          </div>
          <div>
            <p className="!font-Alex  !text-[30px] lg:!text-[60px]">
              {timeRemaining.hours}
            </p>
            <p className="!text-[10px] lg:!text-base">HOURS</p>
          </div>
          <div>
            <p className="!font-Alex  !text-[30px] lg:!text-[60px]">
              {timeRemaining.minutes}
            </p>
            <p className="!text-[10px] lg:!text-base">MINUTES</p>
          </div>
          <div>
            <p className="!font-Alex  !text-[30px] lg:!text-[60px]">
              {timeRemaining.seconds}
            </p>
            <p className="!text-[10px] lg:!text-base">SECONDS</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GreenStrip;
