import React from "react";

const GaneshVandana = () => {
  return (
    <div className="absolute top-36 w-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white ">
      <img
        src={"/assets/ganesh.svg"}
        className="object-cover w-40 h-40 m-auto mb-4"
      />
      <p className="text-center m-auto !text-[28px]">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।</p>
      <p className="text-center m-auto !text-[28px]">
        निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
      </p>
    </div>
  );
};

export default GaneshVandana;
