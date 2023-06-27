import React, { useState,useEffect } from 'react';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Itinerary({step,fctnName,fctnInfo,dateTime,location,img, theme}) {
    return(
       
        <div className='text-center mb-16 md:mb-0'>
        <div className='mt-3 '>
            <img src={img} alt=' ' className='w-52 mx-auto md:mb-14 mb-10 rounded-2xl'/>
        </div>
        <div className='mt-4 lg:mt-0'>
            <p className='!font-lora !text-[25px] mb-3 '>{fctnName} <span style={{backgroundColor: theme?.bgColor}} className='text-white px-3 py-1 text-base'><a href={location}>map</a></span> </p>
            <p className='!font-Poppins !text-[25px] mb-4 '>{dateTime}</p>
            <p className='!font-Poppins !text-[16px] mt-2 lg:mt-0 md:px-20 px-4'>{fctnInfo}</p>
        </div>
        </div>
    )
}

export default Itinerary
