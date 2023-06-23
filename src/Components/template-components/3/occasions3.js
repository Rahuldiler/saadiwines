import React, { useState,useEffect } from 'react';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Occasions3({fctnName,fctnInfo,img}) {
    return(
        <div className=' mb-11'>
            <div className='mt-3 '>
                <img src={img} alt=' ' className='w-52 mx-auto'/>
            </div>
            <div className='mt-4 lg:mt-0'>
                <p className='!font-lora !text-[25px] mb-3 '>{fctnName} </p>
                <p className='!font-Poppins !text-[16px] mt-2 lg:mt-0 md:px-20 px-5 '>{fctnInfo}</p>
            </div>
        </div>
    )
}

export default Occasions3
