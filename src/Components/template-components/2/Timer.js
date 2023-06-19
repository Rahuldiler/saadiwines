import { useEffect, useState } from 'react';

const Timer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className='text-[20px] lg:w-[85%] grid grid-cols-4 text-center'>
    <div>
      <p className=' sm:!text-[70px] !text-[30px] lg:!text-[100px]'>{timeRemaining.days}</p>
      <p className='sm:!text-[14px] !text-[12px] lg:!text-base'>DAYS</p>
    </div>
    <div>
      <p className='sm:!text-[70px] !text-[30px] lg:!text-[100px]'>{timeRemaining.hours}</p>
      <p className='sm:!text-[14px] !text-[12px] lg:!text-base'>HOURS</p>
    </div>
    <div>
      <p className='sm:!text-[70px] !text-[30px] lg:!text-[100px]'>{timeRemaining.minutes}</p>
      <p className='sm:!text-[14px] !text-[12px] lg:!text-base'>MINUTES</p>
    </div>
    <div>
      <p className='sm:!text-[70px] !text-[30px] lg:!text-[100px]'>{timeRemaining.seconds}</p>
      <p className='sm:!text-[14px] !text-[12px] lg:!text-sm'>SECONDS</p>
    </div>
    </div>
  );
};

export default Timer;