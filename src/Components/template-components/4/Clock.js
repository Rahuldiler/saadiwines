import React, { useState,useEffect } from 'react';



function Clock4({title,text,img,propName, staticTemplateData}) {

    const targetDate = new Date('2023-8-01');
    const calculateTimeRemaining = () => {
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();
    
        const totalSeconds = Math.floor(timeDifference / 1000);
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(totalSeconds % 60);
    
        return { days, hours, minutes, seconds };
      };

      const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

      useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining(calculateTimeRemaining());
        }, 1000); // Update every second
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
    return(
        <div className='  relative ' >
            {propName==="clock"&&<div
            style={{color: staticTemplateData?.theme?.textColor}}
            className=' text-[20px] lg:w-[70%] grid grid-cols-4 text-center mx-auto lg:pt-32 lg:pb-20 pt-20 pb-4'>
              <div className='bg-no-repeat relative object-contain' >
                <p className='!font-Hind !text-[30px]  lg:!text-[60px]'>{timeRemaining.days}</p>
                <p className='!text-[10px] lg:!text-base'>DAYS</p>
                <img src={staticTemplateData?.clock_bg} alt='' className='bg-no-repeat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
              </div>

              <div className='bg-no-repeat relative object-contain' >
                <p className='!font-Hind !text-[30px] lg:!text-[60px]'>{timeRemaining.hours}</p>
                <p className='!text-[10px] lg:!text-base'>Hours</p>
                <img src={staticTemplateData?.clock_bg} alt='' className='bg-no-repeat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
              </div>

              <div className='bg-no-repeat relative object-contain' >
                <p className='!font-Hind !text-[30px]  lg:!text-[60px]'>{timeRemaining.minutes}</p>
                <p className='!text-[10px] lg:!text-base'>Minutes</p>
                <img src={staticTemplateData?.clock_bg} alt='' className='bg-no-repeat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
              </div>

              <div className='bg-no-repeat relative object-contain ' >
                <p className='!font-Hind !text-[30px]  lg:!text-[60px]'>{timeRemaining.seconds}</p>
                <p className='!text-[10px] lg:!text-base'>Second</p>
                <img src={staticTemplateData?.clock_bg} alt='' className='bg-no-repeat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
              </div>
            </div>}
        </div>
    )
}

export default Clock4