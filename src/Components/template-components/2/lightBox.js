import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


const Lightbox = ({ isOpen, imageIndex, onClose, images }) => {
  if (!isOpen) return null;
   
  const [nextImage,setNextImage] = useState(imageIndex)

  function imgSlide(para){
    if(nextImage===0 && para==="pre" ){
      setNextImage(images.length-1)
    }
    else if(nextImage===images.length-1 && para==="nxt"){
       setNextImage(imageIndex)
    }
    else{
      setNextImage(idx => para==="nxt" ? idx+1 : idx-1)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 ">
      {/* <div className='absolute cursor-pointer left-0 top-0 text-white' onClick={()=>imgNext()}>NextImage</div> */}
      <div className='absolute cursor-pointer left-6  text-white top-1/2  transform -translate-x-1/2 -translate-y-1/2' onClick={()=>imgSlide("pre")}><ChevronLeftIcon className='text-white w-10 h-10'/></div>
      <div className='absolute cursor-pointer right-0  text-white  top-1/2  transform -translate-x-1/2 -translate-y-1/2' onClick={()=>imgSlide("nxt")}><ChevronRightIcon className='text-white w-10 h-10'/></div>

      <div className="max-w-3xl w-full ">
          <img src={images[nextImage]} alt="Lightbox" className="rounded-lg shadow-lg" />
          <button
            className="absolute top-0 right-0 m-4 text-gray-400 hover:text-white"
            onClick={onClose}
          >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 10.586l4.95-4.95a1 1 0 0 1 1.415 1.414L13.415 12l4.95 4.95a1 1 0 0 1-1.414 1.415L12 13.415l-4.95 4.95a1 1 0 0 1-1.415-1.414L10.586 12 5.636 7.05A1 1 0 0 1 7.05 5.636L12 10.586z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;