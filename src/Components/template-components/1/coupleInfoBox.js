import React, { useState, useEffect } from "react";

function CoupleInfo({
  bgImage,
  name,
  gender,
  infotext1,
  infotext2,
  father,
  mother,
  grandfather,
  grandmother,
  textColor = "#000",
}) {
  return (
    <div className="relative">
      {/* <div class="absolute top-0 left-0  opacity-100 mix-blend-multiply  w-[100%] h-[100%] bg-cover bg-no-repeat bg-[center_top]" style={{backgroundImage: "url('/images/bg-watercolor-02.jpg')",}}></div> */}
      <div
        className="py-[50px] lg:py-[100px] lg:px-[80px] lg:w-[80%] m-auto text-center mb-4"
        style={{ backgroundImage: bgImage }}
      >
        <p
          className="!font-Alex !text-[50px] text-center"
          style={{ color: textColor }}
        >
          {name}
        </p>
        {/* <p className='mb-4'>{gender}</p> */}
        <p className="mb-2" style={{ color: textColor }}>
          {gender === "THE GROOM" ? "S/O" : "D/O"} {father} and {mother}
        </p>
        {grandfather && (
          <p className="mb-8" style={{ color: textColor }}>
            {gender === "THE GROOM" ? "G/S" : "G/D"} {grandfather} and{" "}
            {grandmother}
          </p>
        )}

        <p className="b-3 mb-3" style={{ color: textColor }}>
          {infotext1}
        </p>
        <p className="b-3" style={{ color: textColor }}>
          {infotext2}
        </p>
        {/* <div className='flex justify-between w-28 mx-auto mt-10'>
            <img src="/images/facebook.svg" alt='' className='w-5'/>
            <img src="/images/twitter.svg" alt='' className='w-5'/>
            <img src="/images/youtube.svg" alt='' className='w-5'/>
          </div> */}
      </div>
    </div>
  );
}

export default CoupleInfo;
