import React from "react";

const Couple = ({ details, label, textColor = "#000" }) => {
  return (
    <div className="relative">
      <div className="pb-[40px] lg:py-[20px] lg:px-[20px] lg:w-[80%] m-auto text-center mb-2">
        <p className="!text-[48px] text-center" style={{ color: textColor }}>
          {details.name}
        </p>
        <p className="mb-2" style={{ color: textColor }}>
          {label === "THE GROOM" ? "S/O" : "D/O"} {details.fatherName} and{" "}
          {details.motherName}
        </p>
        {details.grandFatherName && (
          <p className="mb-8" style={{ color: textColor }}>
            {label === "THE GROOM" ? "G/S" : "G/D"} {details.grandFatherName}{" "}
            and {details.grandMotherName}
          </p>
        )}

        <p className="b-3 mb-3 px-5 lg:px-0" style={{ color: textColor }}>
          {details.description}
        </p>
        <p className="b-3" style={{ color: textColor }}>
          {details.infotext2}
        </p>
      </div>
    </div>
  );
};

export default Couple;
