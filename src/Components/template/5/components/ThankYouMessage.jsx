import React from "react";

const ThankYouMessage = ({ message }) => {
  return (
    <p class="line-clamp-3 text-[16px] bg-black bg-opacity-40 px-0 sm:px-20 my-2 py-1">
      {message}
    </p>
  );
};

export default ThankYouMessage;
