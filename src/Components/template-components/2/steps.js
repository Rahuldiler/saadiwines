import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/solid";


function Steps({ step, fctnName, fctnInfo, dateTime, location, theme }) {

    return (
        <div className='flex mb-[50px] '>
            <div className='lg:mt-3 mt-7 lg:mr-10 mr-6'>
                <ArrowRightIcon className='w-6 h-w-6' />
            </div>
            <div className='mt-4 lg:mt-0'>
                <p className=" text-3xl">
                    {fctnName} <Link href={location}><MapPinIcon style={{color: theme?.bgColor}} className="w-7 h-7 inline-block " /></Link>
                </p>
                <p className='!text-[25px] '>{dateTime}</p>
                <p className='mt-2 lg:mt-0'>{fctnInfo}</p>
            </div>
        </div>
    )
}

export default Steps