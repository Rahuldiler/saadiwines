// import Lightbox from "@/components/template-components/template1Components/lightBox";
import Lightbox from "@/Components/template-components/1/lightBox";

import Itinerary from "@/Components/template-components/3/iteneray";
import Occasions3 from "@/Components/template-components/3/occasions3";
import Temp3Crds from "@/Components/template-components/3/temp3Crds";
import RsvpLightbox from "@/Components/template-components/3/rsvpLightbox";
import React, { useEffect, useState } from "react";
// import ContactFormRsvp from "@/Components/template-components/template1Components/rsvpForm";
import ContactFormRsvp from "@/Components/template-components/1/rsvpForm";
import moment from "moment";

function Template3({ templateData, staticTemplateData }) {
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

    const [timeRemaining, setTimeRemaining] = useState(
      calculateTimeRemaining()
    );

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

  const targetDate = new Date("2023-12-01");
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
      dateTime: "5/jun/2023 | 12:30pm",
      location:
        "https://www.google.com/maps/place/Indira+Gandhi+International+Airport/@28.527554,77.0438314,11z/data=!4m6!3m5!1s0x390d1b85fc2a2d89:0xbef376182c43ed9d!8m2!3d28.5563529!4d77.1006963!16zL20vMDEyNDQ0?entry=ttu",
      functionInfo:
        " The wedding ceremony is the heart of any celebration. It's the moment when the couple exchange vows and commit to spending the rest of their lives together.",
    },
    {
      id: 2,
      stp: "2",
      functionName: " Lunch Time ",
      img: "/assets/templete/3/itenary/gallery-16-1.jpg",
      dateTime: "5/jun/2023 | 12:30pm",
      location:
        "https://www.google.com/maps/place/Mazaar+Restaurant/@28.5688605,77.2328845,15z/data=!4m6!3m5!1s0x390ce3ad97db2cb5:0xdce447161ff5833!8m2!3d28.5701715!4d77.2443807!16s%2Fg%2F1v7pwvx2?entry=ttu",
      functionInfo:
        " After the wedding ceremony, it's time for lunch! This is a time for guests to relax and enjoy a delicious meal together, while catching up with old friends and making new ones.",
    },
    {
      id: 3,
      stp: "3",
      functionName: " Party with Music ",
      img: "/assets/templete/3/itenary/gallery-12-1.jpg",
      dateTime: "5/jun/2023 | 12:30pm",
      location:
        "https://www.google.com/maps/place/C+R+Park+Market+No.1/@28.5350621,77.2431712,13.75z/data=!4m6!3m5!1s0x390ce3d83e0cb4b7:0xb7ece1334b216b84!8m2!3d28.5401153!4d77.2486233!16s%2Fg%2F1wk4bfx6?entry=ttu",
      functionInfo:
        " The party with music is the perfect way to celebrate the newlyweds and their love story. This is a time for guests to let loose, hit the dance floor, and enjoy some great music.",
    },
  ];

  const contant = [
    {
      id: 1,
      image: "/assets/templete/3/contact/pic1.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 2,
      image: "/assets/templete/3/contact/pic2.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9170909090",
    },
    {
      id: 3,
      image: "/assets/templete/3/contact/pic3.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9160909090",
    },
  ];

  const impoFamily = [
    {
      id: 1,
      image: "/assets/templete/3/contact/pic3.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 2,
      image: "/assets/templete/3/contact/pic3.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 3,
      image: "/assets/templete/3/contact/pic3.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 4,
      image: "/assets/templete/3/contact/pic3.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 5,
      image: "/assets/templete/3/contact/pic3.jpg",
      name: "rajat",
      relationship: "brother",
    },
  ];
  const coupleinfo = [
    {
      id: 1,
      groomFather: "A",
      groomMother: "B",
      groomGrandFather: "C",
      groomGrandMother: "D",
      descriptionGroom:
        "smallcase Technologies builds platforms & investment products to invest better in Indian equities. A smallcase is a basket of stocks/ETFs curated to reflect an idea",
    },
    {
      id: 2,
      brideFather: "w",
      brideMother: "X",
      brideGrandFather: "Y",
      brideGrandMother: "Z",
      descriptionBride:
        "Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing",
    },
    { id: 3, brideName: "Tessa Craw ", groomName: "Chris Brown" },
  ];

  return (
    <div>
      <div className="md:grid md:grid-cols-7 py-20  ">
        <div className="flex justify-center relative md:col-span-2">
          <div className="px-6 md:px-0 font-lora">
            <img
              src={staticTemplateData?.gallery_02_1}
              alt=""
              className=" md:w-[22rem] w-[10rem] h-[10rem]  md:h-[27rem] object-cover rounded-full md:rounded-b-full mt-28 mx-auto"
            />
          </div>
          <div className="px-6">
            <img
              src={staticTemplateData?.gallery_01_1}
              alt=""
              className="object-cover  w-[10rem] h-[10rem] rounded-t-full mt-28 md:hidden"
            />
          </div>
          <img
            src={staticTemplateData?.frame09}
            alt=""
            className="w-56 absolute -top-[75px]  left-0 z-30 "
          />
        </div>
        <div className="col-span-3 relative">
          <div className="text-center ">
            <img
              src={staticTemplateData?.couple}
              alt=""
              className="w-16 mb-3 mx-auto"
            />
            <p>Forever Starts Today</p>
          </div>
          <div className="text-center md:text-[100px]  text-6xl  md:leading-[6rem] my-9 font-lora">
            <span className="block">
              {templateData?.weddingInfo?.groom.name}
            </span>
            <span className="block">&</span>
            <span className="block">
              {templateData?.weddingInfo?.bride.name}
            </span>
          </div>
          <div className="text-center text-[50px] font-Poppins ">
            {moment(templateData?.weddingInfo?.dateTime).format("YYYY-MM-DD")}
          </div>
          <img
            src={staticTemplateData?.frame05}
            alt=""
            className="w-16 absolute -bottom-[90px] left-0 z-30"
          />
        </div>
        <div className="md:flex justify-center relative col-span-2 hidden ">
          <div>
            <img
              src={staticTemplateData?.gallery_01_1}
              alt=""
              className="object-cover w-[22rem]  h-[27rem] rounded-t-full mt-28"
            />
          </div>
          <img
              src={staticTemplateData?.frame06}
            alt=""
            className="w-20 absolute top-0 left-[53px] z-30"
          />
          <img
              src={staticTemplateData?.frame08}
            alt=""
            className="w-64 absolute -bottom-[90px] -right-[120px] z-30"
          />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 text-center font-Poppins  mx-10">
        <div>
          <h2 className="text-[50px] ">
            {templateData?.weddingInfo?.bride.name}
          </h2>
          <p className="mt-5 !text-[30px]">
            {" "}
            s/o Mr. {templateData?.weddingInfo?.bride.fatherName} and Mrs.{" "}
            {templateData?.weddingInfo?.bride.motherName}
          </p>
          <p className="mt-1 !text-[30px]">
            {" "}
            g/s Mr. {templateData?.weddingInfo?.bride.grandFatherName} and Mrs.{" "}
            {templateData?.weddingInfo?.bride.grandMotherName}
          </p>
          <p className="md:px-20 mt-5 ">
            {templateData?.weddingInfo?.bride.description}
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <h2 className="text-[50px] ">
            {templateData?.weddingInfo?.groom.name}
          </h2>
          <p className="mt-5 !text-[30px]">
            {" "}
            s/o Mr. {templateData?.weddingInfo?.groom.fatherName} and Mrs.{" "}
            {templateData?.weddingInfo?.groom.motherName}
          </p>
          <p className="mt-1 !text-[30px]">
            {" "}
            g/s Mr. {templateData?.weddingInfo?.bride.grandFatherName} and Mrs.{" "}
            {templateData?.weddingInfo?.groom.grandMotherName}
          </p>
          <p className="md:px-20 mt-5 ">
            {templateData?.weddingInfo?.groom.description}
          </p>
        </div>
      </div>

      <div className="relative ">
        <div className="text-center md:mx-72 mx-1 relative md:py-56  mb-8">
          <div>
            <p className="!font-Poppins !text-[14px]">Stepping Into Forever</p>
            <h1 className="!font-lora md:!text-[100px] !text-[30px] leading-[7.25rem] my-6 md:px-56">
              Join Us in Celebrating
            </h1>
            <p className="!font-Poppins !text-[16px] md:px-56 px-1 ">
              {templateData?.weddingInfo?.thankYouMessage}
            </p>
          </div>
          <div className=" text-[20px] lg:w-[70%] grid grid-cols-4 text-center mx-auto z-50 mt-6">
            <div>
              <p className="!font-lora !text-[50px] lg:!text-[60px]">
                {timeRemaining.days}
              </p>
              <p className="!text-[10px]  !font-Poppins lg:!text-base">DAYS</p>
            </div>
            <div>
              <p className="!font-lora  !text-[50px] lg:!text-[60px]">
                {timeRemaining.hours}
              </p>
              <p className="!text-[10px] !font-Poppins lg:!text-base">HOURS</p>
            </div>
            <div>
              <p className="!font-lora  !text-[50px] lg:!text-[60px]">
                {timeRemaining.minutes}
              </p>
              <p className="!text-[10px] !font-Poppins lg:!text-base">
                MINUTES
              </p>
            </div>
            <div>
              <p className="!font-lora  !text-[50px] lg:!text-[60px]">
                {timeRemaining.seconds}
              </p>
              <p className="!text-[10px] !font-Poppins lg:!text-base">
                SECONDS
              </p>
            </div>
          </div>

          {/* <div><button className="px-8 py-3 cursor-pointer mt-10 border-black rounded-3xl text-[12px] border-[1px] " onClick={() => openRsvpLightbox()}>RSPV</button></div> */}

          <img
            src={staticTemplateData?.frame}
            alt=""
            className="absolute top-14 -z-10"
          />
        </div>
        {/* <img src="/assets/templete/3/frame-03.png" alt="" className="absolute bottom-0 w-72 left-0 -z-10" />
            <img src="/assets/templete/3/frame-04.png" alt="" className="absolute top-0 w-48 right-0 -z-10" /> */}
        <RsvpLightbox isOpen={isOpenRsvp} onClose={closeRsvpLightbox} />
      </div>

      <div className="grid md:grid-cols-3 md:px-28 mt-16 md:mt-44 ">
        {templateData?.milestone?.map((steps, index) => (
          <div key={index} className={`text-center`}>
            <Occasions3
              img={occasions3[0].img}
              fctnName={steps.title}
              fctnInfo={steps.description}
            />
          </div>
        ))}
      </div>

      <div className="mb-12 md:mt-10 relative ">
        <p className="md:!text-[100px] !text-[50px] !font-lora !text-center mt-16">
          Itinerary
        </p>
        <div className="grid md:grid-cols-3 grid-row-3 md:px-28 md:my-16 my-8">
          {templateData?.itinerary?.map((steps, index) => (
            <div key={index} className={``}>
              <Itinerary
              theme={staticTemplateData?.theme}
                step={steps.id}
                fctnName={steps.functionName}
                location={steps.mapsLocation}
                dateTime={moment(steps.dateTime).format(
                  "DD/MMM/YYYY " + " | " + " h:mm A"
                )}
                fctnInfo={steps.details}
                img={stepss[0].img}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-2 gap-4 md:px-10 px-2 cursor-pointer my-10">
          {images.map((image, index) => (
            <div key={index} className={``} onClick={() => openLightbox(index)}>
              <img
                src={image.image}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        isOpen={isOpen}
        imageIndex={imageIndex}
        onClose={closeLightbox}
        images={images}
      />

      <div
        className="mb-12 mt-16 relative pb-7"
        style={{
          backgroundImage: staticTemplateData?.greyLight,
        }}
      >
        <p className="md:!text-[100px] !text-[40px] !font-lora !text-center">
          Important Family Members
        </p>
        <div className="grid md:grid-cols-3 grid-cols-2  md:gap-24 gap-8 md:mt-14 mt-6 mb-16 ">
          {templateData?.familyMembers?.map((cards, index) => (
            <Temp3Crds
              imgSrc={staticTemplateData?.pic2}
              name={cards.name}
              relationship={cards.relation}
            />
          ))}
        </div>
      </div>

      <div className="md:py-4 md:pb-32 py-20">
        <p className="md:!text-[50px] !text-[25px] !font-lora !text-center mt-5">
          Point Of Contact
        </p>
        <div className="grid md:grid-cols-3  mt-12">
          {templateData?.pocs?.map((cards, index) => (
            <Temp3Crds
              imgSrc={staticTemplateData?.pic2}
              name={cards.firstName}
              relationship={cards.relationship}
              contactNo={`+91 ${cards.contactNumber}`}
            />
          ))}
        </div>
      </div>

      <div
        className="pt-10"
        style={{
          backgroundImage: staticTemplateData?.greyLight,
        }}
      >
        <div className="text-center max-w-4xl mx-auto my-10 px-10 md:my-0 md:px-0">
          <p className="!font-Poppins !text-[14px]">
            YOU'RE INVITED TO SHARE IN OUR JOY & HAPPINESS
          </p>
          <p className="!font-Poppins md:!text-[100px] !text-[40px] py-6">
            Let's Celebrate True Love
          </p>
          <p className="!font-Poppins !text-[16px] mb-9">
            Please take a moment to fill out the RSVP form below to confirm your
            attendance. We understand that your plans may change, so please feel
            free to update us if any adjustments.
          </p>
          <ContactFormRsvp themeColor={staticTemplateData?.themeColor} clasNme="mt-[100px] pb-[30px] px-[20px]" />
        </div>
      </div>
    </div>
  );
}
export default Template3;
