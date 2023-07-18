import Image from "next/image";
import React from "react";

const PersonCard = ({ name, subText, avatar, theme }) => {
  return (
    <div
      style={{ backgroundColor: theme.bgColor }}
      className={`text-center bg-[${theme.bgColor}] w-52 px-2 pt-16 pb-6 rounded-lg shadow-2xl relative`}
    >
      <div className=" rounded-lg absolute top-[-50px] left-1/2 transform -translate-x-1/2 ">
        <Image
          src={avatar}
          alt=""
          width={28}
          height={28}
          className="object-cover rounded-2xl w-28 h-28 shadow-2xl"
        />
      </div>
      <div className={` !font-Cardo mt-2`}>
        <p className="">{name}</p>
       <p className="truncate !text-[16px]">{subText}</p>
      </div>
    </div>
  );
};

export default PersonCard;
