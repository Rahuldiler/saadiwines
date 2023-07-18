import moment from "moment";
import React from "react";

const ItineraryComponent = ({ steps, theme }) => {
  return (
    <div className="px-0 lg:flex mb-[50px] lg:px-[60px]" key={steps.id}>
      <div className="mt-4 lg:mt-0" style={{  }}>
        <p className="!font-Nunito !text-[32px] ">
          {steps.functionName}{" "}
          <span
            style={{
              backgroundColor: theme.bgColor,
              color: theme?.textColor,
            }}
            className={`bg-[${theme.bgColor}] text-base`}
          >
            <a href={steps.mapsLocation}>map</a>
          </span>
        </p>
        <p className="!font-Nunito !text-[24px] ">
          {moment(steps.dateTime).format("LLLL")}
        </p>
        <p className="mt-2 lg:mt-0">{steps.details}</p>
      </div>
    </div>
  );
};

export default ItineraryComponent;
