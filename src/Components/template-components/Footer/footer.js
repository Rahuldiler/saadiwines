import { footerString } from "@/constants/template/template";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TemplateFooter = ({ image1, image2 }) => {
  return (
    <div
      className="text-center py-5 lg:py-10 bg-right-top bg-no-repeat bg-contain relative"
      style={{ backgroundImage: image1 }}
    >
      <span
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50  lg:w-[240px] lg:h-[130px] bg-[length:235px_auto] bg-no-repeat"
        style={{ backgroundImage: image2 }}
      ></span>
      {/* <p className="!font-Alex !text-[30px] lg:!text-[50px] mb-3">
        {templateData?.weddingInfo?.groom.name.split(" ")[0]} &
        {templateData?.weddingInfo?.bride.name.split(" ")[0]}
      </p> */}
      <div className="flex flex-col sm:flex sm:flex-row justify-center items-center">
        <p className="!font-Cardo !text-[16px] mr-1 mt-2 mb-2 md:!text-[25px]">
          {footerString}
        </p>
        <Link href={'/'}>
          <Image
            width={1000}
            height={1000}
            src="/assets/Logo.svg"
            alt="Logo"
            className="header-logo"
            style={{ height: "24px", width: "auto" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default TemplateFooter;
