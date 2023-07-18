import React from "react";

const GaneshVandana = () => {
  return (
    <div className="absolute top-32 w-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white">
      <img
        src={"/assets/ganesh.svg"}
        className="object-cover w-40 h-40 m-auto mb-4"
      />
      <p className="text-center m-auto">
        एकदंताय वक्रतुण्डाय गौरीतनयाय धीमहि । गजेशानाय भालचन्द्राय श्रीगणेशाय
        धीमहि ॥ गानचतुराय गानप्राणाय गानान्तरात्मने ।
      </p>
    </div>
  );
};

export default GaneshVandana;
