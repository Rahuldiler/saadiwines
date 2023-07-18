import React from "react";
import PersonCard from "../common/PersonCard";

const POC = ({ pocs, theme }) => {
  return (
    <div className="lg:w-[100%] relative sm:px-[100px] px-[10px] mt-10">
      <h1 className="!font-Alex text-center sm:text-[70px] text-[70px] mb-5">
        Points of contacts
      </h1>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-20 py-14`}
      >
        {pocs?.map((poc) => {
          return (
            <PersonCard
            theme={theme}
              key={poc.id}
              avatar={poc.image}
              name={poc.firstName}
              subText={`+91 ${poc.contactNumber}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default POC;
