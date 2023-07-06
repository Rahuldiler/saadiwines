import React from "react";
import Image from "next/image";

function Cards({
  imgSrc,
  name,
  relationship,
  contactNo,
  themeColor,
  textBGColor = "#fff",
  theme,
}) {
  return (
    <div
      style={{ backgroundColor: theme.bgColor }}
      className={`text-center bg-[${theme.bgColor}] px-28 pt-16 pb-6 rounded-lg shadow-2xl relative`}
    >
      <div className=" rounded-lg absolute top-[-50px] left-1/2 transform -translate-x-1/2 ">
        {/* <img src={imgSrc} alt="" className="object-cover rounded-2xl w-28 h-28 shadow-2xl" /> */}
        <Image
          src={imgSrc}
          alt=""
          width={28}
          height={28}
          // layout="fill"
          className="object-cover rounded-2xl w-28 h-28 shadow-2xl"
        />
      </div>
      <div
        style={{ color: theme.textColor }}
        className={` !font-Cardo mt-2`}
        // style={{ color: theme.textColor }}
      >
        <p className="">{name}</p>
        {!contactNo && <p className="">{relationship}</p>}
        {contactNo && <p className="">{contactNo}</p>}
      </div>
    </div>
  );
}

export default Cards;
