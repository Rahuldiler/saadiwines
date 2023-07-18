import React from "react";

const ThankYouMessage = ({ message }) => {
  return (
    <>
      {/* <div className="line-clamp-4 border text-center text-[16px] h-24 w-[100%] mb-4 lg:w-[100%] lg:h-auto lg:text-[16px] transition-all duration-500 flex justify-center items-center">
        {message}
      </div> */}
      <p class="line-clamp-3 text-[16px]">
      {message}
      </p>
    </>
  );
};

export default ThankYouMessage;
