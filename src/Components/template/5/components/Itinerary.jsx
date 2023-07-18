import React from "react";
import ItineraryComponent from "../common/ItineraryComponent";

const Itinerary = ({ itineraryList, theme }) => {
  return (
    <div className="lg:w-[100%] relative sm:px-[20px] px-[10px] text-center">
      <h1 className="!font-Alex text-center sm:text-[70px] text-[70px] mb-5">
        Itinerary
      </h1>
      <div className="lg:mb-[10%] mb-[20%]">
        {itineraryList?.map((steps) => {
          return <ItineraryComponent steps={steps} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Itinerary;
