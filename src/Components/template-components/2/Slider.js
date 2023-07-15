import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

export default function SwiperMain({ SliderImg }) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {SliderImg.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                id={img.id}
                src={img.link}
                fill
                className="!relative"
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
