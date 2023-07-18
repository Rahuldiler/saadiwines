import React from "react";
import Couple from "../common/Couple";

const CoupleIntro = ({ weddingInfo }) => {
  const { bride, groom } = weddingInfo;
  return (
    <div className="pt-[60px]">
      <h1 className="!font-Alex text-center sm:text-[70px] text-[70px] mb-5 mt-5">
        Our Wedding
      </h1>
      <Couple details={bride} label={"THE BRIDE"} />
      <Couple details={groom} label={"THE GROOM"} />
    </div>
  );
};

export default CoupleIntro;
