import React from 'react';

function Cards({imgSrc,name,relationship,contactNo}) {
    return(
        <div className='text-center bg-[#9CAB8D] px-28 pt-16 pb-6 rounded-lg shadow-2xl relative '>
            <div className=' rounded-lg absolute top-[-50px] left-1/2 transform -translate-x-1/2 '>
                <img src={imgSrc} alt='' className='rounded-2xl w-28 h-28 shadow-2xl'/>
            </div>
            <div className='text-white !font-Cardo mt-2'>
                <p className=''>{name}</p>
                {!contactNo&&<p className=''>{relationship}</p>}
                {contactNo&&<p className=''>{contactNo}</p>}
            </div>
        </div>
    )
}

export default Cards
