import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Cards({ imgSrc, name, relationship, contactNo }) {
  return (
    <div className="text-center pb-6 relative w-48 h-48 mx-auto">
      {imgSrc && (
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover rounded-2xl shadow-2xl !relative mx-auto"
        />
      )}
      <div className="text-black !font-Cardo mt-4">
        <p className="mb-3">{name}</p>
        {!contactNo && <p className="mb-3">{relationship}</p>}
        {contactNo && (
          <p className="">
            <CheckIcon className="w-4 h-4 inline-block mr-2" />
            {contactNo}
          </p>
        )}
      </div>
    </div>
  );
}

export default Cards;
