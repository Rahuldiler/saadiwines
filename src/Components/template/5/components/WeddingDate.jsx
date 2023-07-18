import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay } from "swiper";
import moment from "moment";
import ThankYouMessage from "./ThankYouMessage";
const WeddingDate = ({ images, weddingInfo }) => {

  const slideShowImages = Object.entries(images)
    .filter(([label]) => label.includes("date"))
    .reduce((acc, [label, imageUrl]) => {
      acc.push({ ["link"]: imageUrl, id: label });
      return acc;
    }, []);
    
  return (
    <div className="lg:sticky lg:w-[60%] lg:h-screen lg:top-0">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {slideShowImages.map((img, id) => {
          return (
            <SwiperSlide key={id}>
              <Image
                alt=""
                src={img.link}
                id={img.id}
                fill
                className="!relative lg:!h-screen !h-[50vh] object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-end">
                <div className="text-white w-[80%] text-center">
                  <div className="!font-Alex text-center text-[50px]  lg:w-auto lg:text-[120px] transition-all duration-500">
                    {weddingInfo?.groom.name.split(" ")[0]} &{" "}
                    {weddingInfo?.bride.name.split(" ")[0]}
                  </div>
                  <div className="text-center text-[30px] tracking-wider">
                    {moment(weddingInfo?.functionDateTime).format(
                      "DD-MMM-YYYY"
                    )}
                  </div>
                  <ThankYouMessage message={weddingInfo?.thankYouMessage} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white w-max">
        <div
          className={`!font-Alex text-center text-[100px] w-56 lg:w-auto lg:text-[120px transition-all duration-500`}
        >
          {templateData?.weddingInfo?.groom.name.split(" ")[0]} &{" "}
          {templateData?.weddingInfo?.bride.name.split(" ")[0]}
        </div>

        <div className="text-center text-[30px] tracking-wider">
          {moment(templateData?.weddingInfo?.functionDateTime).format(
            "DD-MMM-YYYY"
          )}
        </div>
        <div className="!font-Alex text-center text-[30px] w-24 lg:w-auto lg:text-[120px transition-all duration-500 w-24">
          <p>{templateData?.weddingInfo?.thankYouMessage}</p>
        </div>
      </div> */}
    </div>
  );
};

export default WeddingDate;
