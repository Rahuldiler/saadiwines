import React from "react";
import MileStoneComponent from "../common/MileStoneComponent";

const Milestones = ({ milestoneList }) => {
  return (
    <div className="lg:w-[100%] relative sm:px-[100px] px-[10px] text-center mt-10">
      <h1 className="!font-Alex text-center sm:text-[70px] text-[70px] mb-5">
        Milestones
      </h1>
      <div className="lg:mb-[10%] mb-[20%]">
        {milestoneList?.map((milestone) => {
          return <MileStoneComponent milestone={milestone} />;
        })}
      </div>
    </div>
  );
};

export default Milestones;
