// import Lightbox from "@/components/template-components/template1Components/lightBox";
import Lightbox from "@/Components/template-components/1/lightBox";

import Itinerary from "@/Components/template-components/3/iteneray";
import Occasions3 from "@/Components/template-components/3/occasions3";
import Temp3Crds from "@/Components/template-components/3/temp3Crds";
import RsvpLightbox from "@/Components/template-components/3/rsvpLightbox";
import React, { useEffect, useState } from "react";
// import ContactFormRsvp from "@/Components/template-components/template1Components/rsvpForm";
import ContactFormRsvp from "@/Components/template-components/1/rsvpForm";



function Template3() {

    const useTimeRemaining = (targetDate) => {
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
      
        return timeRemaining;
      };
   
    
      const targetDate = new Date('2023-12-01');
      const timeRemaining = useTimeRemaining(targetDate);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenRsvp, setIsOpenRsv] = useState(false);
    const [imageIndex, setImageIndex] = useState();
    
    const closeLightbox = () => {
    setIsOpen(false);
    };

    const openLightbox = (img) => {
        setIsOpen(true);
        setImageIndex(img);
    };
    const closeRsvpLightbox = () => {
        setIsOpenRsv(false);
        };
    
    const openRsvpLightbox = () => {
        setIsOpenRsv(true);
        };
  

    const images = [
        { id: 1, image: "/assets/templete/3/gallery/gallery-03-1.jpg" },
        { id: 2, image: "/assets/templete/3/gallery/gallery-05-1.jpg" },
        { id: 3, image: "/assets/templete/3/gallery/gallery-06.jpg" },
        { id: 4, image: "/assets/templete/3/gallery/gallery-08-1.jpg" },
        { id: 5, image: "/assets/templete/3/gallery/gallery-09-1.jpg" },
        { id: 6, image: "/assets/templete/3/gallery/gallery-10-1.jpg" },
        { id: 7, image: "/assets/templete/3/gallery/gallery-13-1.jpg" },
        { id: 8, image: "/assets/templete/3/gallery/gallery-14-2.jpg" },
      ];

      const occasions3 = [
        {
          id: 1,
          stp: "1",
          img: "/assets/templete/3/occasions/icon-04.png",
          functionName: " The Ceremony ",
          functionInfo:
            " The Ceremony is the moment when two people officially become partners for life.",
        },
        {
          id: 2,
          stp: "2",
          img: "/assets/templete/3/occasions/icon-06.png",
          functionName: "Lunch Together ",
          functionInfo:
            " Moment to relax, enjoy good food, and create unforgettable memories, a cherished tradition.",
        },
        {
          id: 3,
          stp: "3",
          img: "/assets/templete/3/occasions/icon-05.png",
          functionName: "Photo Boo ",
          functionInfo:
            " Fun and interactive way to capture memories with silly props and other.",
        },
       
      ];

      const stepss = [
        {
          id: 1,
          stp: "1",
          img: "/assets/templete/3/itenary/gallery-11-1.jpg",
          functionName: " Wedding Ceremony ",
          dateTime:"5/jun/2023 | 12:30pm",
          location:"https://www.google.com/maps/place/Indira+Gandhi+International+Airport/@28.527554,77.0438314,11z/data=!4m6!3m5!1s0x390d1b85fc2a2d89:0xbef376182c43ed9d!8m2!3d28.5563529!4d77.1006963!16zL20vMDEyNDQ0?entry=ttu",
          functionInfo:
            " The wedding ceremony is the heart of any celebration. It's the moment when the couple exchange vows and commit to spending the rest of their lives together.",
        },
        {
          id: 2,
          stp: "2",
          functionName: " Lunch Time ",
          img: "/assets/templete/3/itenary/gallery-16-1.jpg",
          dateTime:"5/jun/2023 | 12:30pm",
          location:"https://www.google.com/maps/place/Mazaar+Restaurant/@28.5688605,77.2328845,15z/data=!4m6!3m5!1s0x390ce3ad97db2cb5:0xdce447161ff5833!8m2!3d28.5701715!4d77.2443807!16s%2Fg%2F1v7pwvx2?entry=ttu",
          functionInfo:
            " After the wedding ceremony, it's time for lunch! This is a time for guests to relax and enjoy a delicious meal together, while catching up with old friends and making new ones.",
        },
        {
          id: 3,
          stp: "3",
          functionName: " Party with Music ",
          img: "/assets/templete/3/itenary/gallery-12-1.jpg",
          dateTime:"5/jun/2023 | 12:30pm",
          location:"https://www.google.com/maps/place/C+R+Park+Market+No.1/@28.5350621,77.2431712,13.75z/data=!4m6!3m5!1s0x390ce3d83e0cb4b7:0xb7ece1334b216b84!8m2!3d28.5401153!4d77.2486233!16s%2Fg%2F1wk4bfx6?entry=ttu",
          functionInfo:
            " The party with music is the perfect way to celebrate the newlyweds and their love story. This is a time for guests to let loose, hit the dance floor, and enjoy some great music.",
        },
        
      ];

      const contant = [
        { id: 1, image: "/assets/templete/3/contact/pic1.jpg",  name:"rajat", relationship:"brother", contactNo:"+9190909090" },
        { id: 2, image: "/assets/templete/3/contact/pic2.jpg",  name:"rajat", relationship:"brother", contactNo:"+9170909090"},
        { id: 3, image: "/assets/templete/3/contact/pic3.jpg",  name:"rajat", relationship:"brother", contactNo:"+9160909090"},
    
      ];

      const impoFamily = [
        { id: 1, image: "/assets/templete/3/contact/pic3.jpg",  name:"rajat", relationship:"brother" },
        { id: 2, image: "/assets/templete/3/contact/pic3.jpg",  name:"rajat", relationship:"brother"},
        { id: 3, image: "/assets/templete/3/contact/pic3.jpg",  name:"rajat", relationship:"brother"},
        { id: 4, image: "/assets/templete/3/contact/pic3.jpg",  name:"rajat", relationship:"brother"},
        { id: 5, image: "/assets/templete/3/contact/pic3.jpg",  name:"rajat", relationship:"brother" },
      ];
      const coupleinfo = [
        { id: 1, groomFather: "A",  groomMother:"B", groomGrandFather:"C", groomGrandMother:"D" },
        { id: 2, brideFather: "w",  brideMother:"X", brideGrandFather:"Y", brideGrandMother:"Z" },
        { id: 3, brideName: "Tessa Craw ",  groomName:"Chris Brown" },
      ];

    
return(
    <div>
        <div className="md:grid md:grid-cols-7 py-20  ">
            <div className="flex justify-center relative md:col-span-2">
              <div className="px-6 md:px-0 font-lora">
                <img src="/assets/templete/3/coupleData/gallery-02-1.jpg" alt="" className=" md:w-[22rem] w-[10rem] h-[10rem]  md:h-[27rem] object-cover rounded-full md:rounded-b-full mt-28 mx-auto" />
                  <p className='text-center mt-10'> d/o Mr. {coupleinfo[0].groomFather} and Mrs. {coupleinfo[0].groomMother}</p>
                  <p className='text-center'> g/d Mr. {coupleinfo[0].groomGrandFather} and Mrs. {coupleinfo[0].groomGrandMother}</p>
              </div>
              <div className="px-6">
              <img src="/assets/templete/3/coupleData/gallery-01-1.jpg" alt="" className="object-cover  w-[10rem] h-[10rem] rounded-t-full mt-28 md:hidden"  />
                <p className='text-center mt-10 ml-5 md:hidden'> s/o Mr. {coupleinfo[1].brideFather} and Mrs. {coupleinfo[1].brideMother}</p>
                <p className='text-center ml-5 md:hidden'> g/s Mr. {coupleinfo[1].brideGrandFather} and Mrs. {coupleinfo[1].brideGrandMother}</p>
              </div>
                <img src="/assets/templete/3/frame-09.png" alt="" className="w-56 absolute -top-[75px]  left-0 z-30 "/>
            </div>
            <div className="col-span-3 relative">
                <div className="text-center ">
                    <img src="/assets/templete/3/couple.png" alt="" className="w-16 mb-3 mx-auto"/>
                    <p>Forever Starts Today</p>
                </div>
                <div className="text-center md:text-[100px]  text-6xl  md:leading-[6rem] my-9 font-lora"><span className="block">{coupleinfo[2].brideName}</span> <span className="block">&</span> <span className="block">{coupleinfo[2].groomName}</span></div>
                <div className="text-center text-[20px] font-Poppins ">2023-12-01</div>
                <img src="/assets/templete/3/frame-05.png" alt="" className="w-16 absolute -bottom-[90px] left-0 z-30"/>
            </div>
            <div className="md:flex justify-center relative col-span-2 hidden ">
              <div>
                <img src="/assets/templete/3/coupleData/gallery-01-1.jpg" alt="" className="object-cover w-[22rem]  h-[27rem] rounded-t-full mt-28"  />
                <p className='text-center mt-10'> s/o Mr. {coupleinfo[1].brideFather} and Mrs. {coupleinfo[1].brideMother}</p>
                <p className='text-center'> g/s Mr. {coupleinfo[1].brideGrandFather} and Mrs. {coupleinfo[1].brideGrandMother}</p>
              </div>
                <img src="/assets/templete/3/frame-06.png" alt="" className="w-20 absolute top-0 left-[53px] z-30"/>
                <img src="/assets/templete/3/frame-08.png" alt="" className="w-64 absolute -bottom-[90px] -right-[120px] z-30"/>
            </div>
        </div>
      
        <div className="relative ">
            <div className="text-center md:mx-72 mx-1 relative md:py-56  mb-8" >
              <div>
                <p  className="!font-Poppins !text-[14px]">Stepping Into Forever</p>
                <h1 className="!font-lora md:!text-[100px] !text-[30px] leading-[7.25rem] my-6 md:px-56">Join Us in Celebrating</h1>
                <p  className="!font-Poppins !text-[16px] md:px-56 px-1 ">Together with their families, Sylvie and Lucas invite you to join in the celebration of their love as they exchange vows and become one, please join us on at our wedding.</p>
              </div>
              <div className=' text-[20px] lg:w-[70%] grid grid-cols-4 text-center mx-auto z-50 mt-6'>
                  <div>
                      <p className='!font-lora !text-[50px] lg:!text-[60px]'>{timeRemaining.days}</p>
                      <p className='!text-[10px]  !font-Poppins lg:!text-base'>DAYS</p>
                  </div>
                  <div>
                      <p className='!font-lora  !text-[50px] lg:!text-[60px]'>{timeRemaining.hours}</p>
                      <p className='!text-[10px] !font-Poppins lg:!text-base'>HOURS</p>
                  </div>
                  <div>
                      <p className='!font-lora  !text-[50px] lg:!text-[60px]'>{timeRemaining.minutes}</p>
                      <p className='!text-[10px] !font-Poppins lg:!text-base'>MINUTES</p>
                  </div>
                  <div>
                        <p className='!font-lora  !text-[50px] lg:!text-[60px]'>{timeRemaining.seconds}</p>
                        <p className='!text-[10px] !font-Poppins lg:!text-base'>SECONDS</p>
                    </div>
                </div>

                {/* <div><button className="px-8 py-3 cursor-pointer mt-10 border-black rounded-3xl text-[12px] border-[1px] " onClick={() => openRsvpLightbox()}>RSPV</button></div> */}

                <img src="/assets/templete/3/frame.png" alt="" className="absolute top-14 -z-10" />
               
            </div>
            {/* <img src="/assets/templete/3/frame-03.png" alt="" className="absolute bottom-0 w-72 left-0 -z-10" />
            <img src="/assets/templete/3/frame-04.png" alt="" className="absolute top-0 w-48 right-0 -z-10" /> */}
            <RsvpLightbox isOpen={isOpenRsvp}  onClose={closeRsvpLightbox} />
        </div>

        <div className="grid md:grid-cols-3 md:px-28 mt-16 md:mt-44 ">
        {occasions3.map((steps, index) => (
            <div key={index} className={`text-center`}>
            <Occasions3
                img = {steps.img}
                fctnName={steps.functionName}
                fctnInfo={steps.functionInfo}
            />
            </div>
        ))}
        </div>


        <div className="mb-12 md:mt-10 relative "> 
            <p className="md:!text-[100px] !text-[50px] !font-lora !text-center mt-16">Itinerary</p>
            <div className="grid md:grid-cols-3 grid-row-3 md:px-28 md:my-16 my-8">
                {stepss.map((steps, index) => (
                <div key={index} className={``}>
                    <Itinerary
                    step={steps.stp}
                    fctnName={steps.functionName}
                    location = {steps.location}
                    dateTime = {steps.dateTime}
                    fctnInfo={steps.functionInfo}
                    img={steps.img}
                    />
                </div>
                ))}
            </div>
        </div>
      

        <div className="">
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-2 gap-4 md:px-10 px-2 cursor-pointer my-10">
            {images.map((image, index) => (
                <div
                key={index}
                className={``}
                onClick={() => openLightbox(index)}
                >
                <img
                    src={image.image}
                    alt=""
                    className="object-contain w-full h-full"
                />
                </div>
            ))}
            </div>
        </div>
        <Lightbox isOpen={isOpen} imageIndex={imageIndex} onClose={closeLightbox} images={images}/>

     
        <div className="mb-12 mt-16 relative pb-7" style={{ backgroundImage: "url('/assets/templete/3/img-grey-light.png')" }}> 
            <p className="md:!text-[100px] !text-[40px] !font-lora !text-center">Important Family Members</p>
            <div className="grid md:grid-cols-3 grid-cols-2  md:gap-24 gap-8 md:mt-14 mt-6 mb-16 ">
                {impoFamily.map((cards, index) => (
                    <Temp3Crds imgSrc={cards.image} name={cards.name} relationship={cards.relationship} contactNo={cards.contactNo}/>
                ))}
               
            </div>
        </div>

        <div className="md:py-4 md:pb-32 py-20" >
          <p className="md:!text-[50px] !text-[25px] !font-lora !text-center mt-5">Point Of Contact</p>
          <div className="grid md:grid-cols-3  mt-12">
          {contant.map((cards, index) => (
            <Temp3Crds imgSrc={cards.image} name={cards.name} relationship={cards.relationship} contactNo={cards.contactNo}/>
            ))}
          </div>
        </div>

        <div className="pt-10" style={{ backgroundImage: "url('/assets/templete/3/img-grey-light.png')" }}>
        <div className="text-center max-w-4xl mx-auto" >
            <p  className="!font-Poppins !text-[14px]">YOU'RE INVITED TO SHARE IN OUR JOY & HAPPINESS</p>
            <p className="!font-Poppins md:!text-[100px] !text-[40px] py-6">Let's Celebrate True Love</p>
            <p className="!font-Poppins !text-[16px]">Please take a moment to fill out the RSVP form below to confirm your attendance. We understand that your plans may change, so please feel free to update us if any adjustments.</p>
            <ContactFormRsvp clasNme="mt-[100px] pb-[30px] px-[20px]"/>
        </div>

        </div>
        
    </div>
)
}
export default Template3



