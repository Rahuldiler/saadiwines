import React from "react";
import Image from "next/image";

function Double({
  img,
  title,
  subtitle,
  infotext,
  imgPostion,
  bgColor,
  hoverTitle,
  hoverText,
  themeColor,
  theme,
  waterColor,
  textBGColor = "#fff",
}) {
  return (
    <div className="grid  lg:grid-cols-2 grid-rows-2 lg:grid-rows-none">
      <div
        className={`${imgPostion === "left" ? "order-1" : "order-2"} relative`}
      >
        {/* <div className="absolute hover:bg-[#0000005E] duration-150 opacity-0 hover:!opacity-100 w-[100%] h-[100%] !font-Alex  flex justify-center items-center" >
                <div className='text-center text-white'>
                <p className='!text-5xl !font-Alex'>{hoverTitle}</p> 
                <p className='!text-base font-Cardio'>{hoverText}</p> 
                </div>
            </div> */}

        {/* <img src={img} alt="" className="h-full object-cover " /> */}
        {img && (
          <Image
            src={img}
            alt=""
            layout="fill"
            className="h-full w-full object-cover "
          />
        )}
      </div>
      <div
        style={{
          backgroundColor: theme.bgColor,
          color: theme?.textColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className={`${
          bgColor === "white"
            ? "bg-white text-black"
            : "bg-[" + theme.bgColor + "] text-black"
        } lg:p-28 p-10 ${
          imgPostion === "left" ? "order-2" : "order-1"
        } relative`}
      >
        <div
          className="absolute top-0 left-0  opacity-100 mix-blend-multiply  w-[100%] h-[100%] bg-cover bg-no-repeat bg-[center_top]"
          style={{ backgroundImage: waterColor }}
        ></div>
        <p className="!font-Alex !text-[42px] mb-3">{title}</p>
        {/* <p className=' lg:!text-[14px] !text-[16px] mb-3'>{subtitle}</p> */}
        <p className=" lg:!text-[18px] !text-[20px] mb-3">{infotext}</p>
      </div>
    </div>
  );
}

export default Double;
