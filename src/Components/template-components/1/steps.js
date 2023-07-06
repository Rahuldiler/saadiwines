import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Steps({
  step,
  fctnName,
  fctnInfo,
  dateTime,
  location,
  themeColor,
  textColor = "#000",
}) {
  return (
    <div className="lg:flex mb-[50px] ">
      <div className="mt-3 mr-10">
        {/* <span className='px-12 py-1 bg-[#9CAB8D] text-white mr-9 '>{step}</span> */}
        <ArrowRightIcon className="w-6 h-w-6" color={textColor} />
      </div>
      <div className="mt-4 lg:mt-0" style={{ color: textColor }}>
        <p className="!font-Nunito font-medium !text-[32px] ">
          {fctnName}{" "}
          <span
            style={{ backgroundColor: themeColor.bgColor, color: themeColor?.textColor }}
            className={`bg-[${themeColor.bgColor}] text-white px-3 py-1 text-base`}
          >
            <a href={location}>map</a>
          </span>
        </p>
        <p className="!font-Nunito !text-[24px] ">{dateTime}</p>
        <p className="mt-2 lg:mt-0">{fctnInfo}</p>
      </div>
    </div>
  );
}

export default Steps;
