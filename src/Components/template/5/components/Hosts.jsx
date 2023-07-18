import React from "react";
import PersonCard from "../common/PersonCard";

const Hosts = ({ familyMembers, theme }) => {
  return (
    <div className="lg:w-[100%] relative sm:px-[100px] px-[10px] ">
      <h1 className="!font-Alex text-center sm:text-[70px] text-[70px] mb-5">
        Important Family Members
      </h1>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-20 py-14`}
      >
        {familyMembers?.map((familyMember) => {
          return (
            <PersonCard
              key={familyMember.id}
              theme={theme}
              avatar={familyMember.image}
              name={familyMember.name}
              subText={familyMember.relation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hosts;
