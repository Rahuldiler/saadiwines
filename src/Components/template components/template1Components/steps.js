import React, { useState,useEffect } from 'react';

function Steps({step,fctnName,fctnInfo}) {
    return(
        <div className='lg:flex mb-[50px] '>
            <div className='mt-3 '>
                <span className='px-12 py-1 bg-[#9CAB8D] text-white mr-9 '>{step}</span>
            </div>
            <div className='mt-4 lg:mt-0'>
                <p className='!font-Alex !text-[35px] '>{fctnName}</p>
                <p className='mt-2 lg:mt-0'>{fctnInfo}</p>
            </div>
        </div>
    )
}

export default Steps
