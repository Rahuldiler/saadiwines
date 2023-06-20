import React, { useState, useEffect } from 'react';

function CoupleInfo({ name, gender, infotext1, father, mother, grandfather, grandmother }) {
    return (
        <>
            <h3 className="sm:text-[25px] text-[22px] mb-5">{name}</h3>
            <h6 className='sm:text-[14px] text-[13px] font-normal tracking-[1px] mb-2'>{gender==="THE GROOM"?"s/o":"d/o"} Mr. {father} and Mrs. {mother}</h6>
            <h6 className='sm:text-[14px] text-[13px] font-normal tracking-[1px] mb-6'>{gender==="THE GROOM"?"g/s":"g/d"} Mr. {grandfather} and Mrs. {grandmother}</h6>
            <p className='sm:text-base text-sm'>{infotext1}</p>
        </>
    )
}

export default CoupleInfo