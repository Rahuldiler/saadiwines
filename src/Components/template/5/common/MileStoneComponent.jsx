import React from "react";

const MileStoneComponent = ({ milestone }) => {
  return (
    <div key={milestone.id} className="lg:mt-[10%]">
      <h1 className="sm:text-[35px] text-[30px] mb-5">{milestone.title}</h1>
      <p className="mb-5">{milestone.description}</p>
    </div>
  );
};

export default MileStoneComponent;
