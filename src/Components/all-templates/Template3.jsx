import Lightbox from "@/Components/template-components/1/lightBox";
import Itinerary from "@/Components/template-components/3/iteneray";
import Occasions3 from "@/Components/template-components/3/occasions3";
import Temp3Crds from "@/Components/template-components/3/temp3Crds";
import RsvpLightbox from "@/Components/template-components/3/rsvpLightbox";
import React, { useEffect, useState } from "react";
import ContactFormRsvp from "@/Components/template-components/1/rsvpForm";
import moment from "moment";
import TemplateFooter from "../template-components/Footer/footer";

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

  const targetDate = new Date(templateData.weddingInfo.functionDateTime);
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

  const galleryImages = () => {
    const galleryKeys = Object.keys(templateData.images).filter((key) =>
      key.startsWith("gallery")
    );
    return galleryKeys.map((key) => templateData.images[key]);
  };
  return (
    <div>
      <div className="md:grid md:grid-cols-7 py-32  mt-20">
        <div className="flex justify-center relative md:col-span-2">
          <div className="text-center absolute -top-[180px] left-8 z-30 sm:hidden">
            <p className="!text-[22px] lg:!text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#BDA60A] to-[#D6BE27]">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
            </p>
            <p className="!text-[22px] lg:!text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#BDA60A] to-[#D6BE27]">
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </p>
            <div className="flex">
              <img
                src={"/assets/Swastic.svg"}
                alt=""
                className="w-12 sm:hidden"
              />
              <img
                src={"/assets/Ganesh2.svg"}
                alt=""
                className="w-36 mb-3 mx-auto mt-4"
              />
              <img
                src={"/assets/Swastic.svg"}
                alt=""
                className="w-12 sm:hidden"
              />
            </div>
          </div>
          <div className="px-6 md:px-0 font-lora">
            <img
              id="date1"
              src={templateData?.images.date1}
              alt=""
              className=" md:w-[22rem] w-[10rem] h-[10rem]  md:h-[27rem] object-cover rounded-full md:rounded-b-full mt-28 mx-auto"
            />
          </div>

          <div className="px-6">
            <img
              // id="date2"
              src={templateData?.images.date2}
              alt=""
              className="object-cover  w-[10rem] h-[10rem] rounded-t-full mt-28 md:hidden"
            />
          </div>
          {/*  left */}
          <img
            src={"/assets/Swastic.svg"}
            alt=""
            className="hidden w-20 absolute -top-[170px]  left-24 z-30 sm:block"
          />

          <img
            src={staticTemplateData?.frame09}
            alt=""
            className="w-24 absolute top-[40px] sm:-top-[65px]  left-0 z-30 sm:w-52"
          />
        </div>
        {/*  Ganesh */}
        <div className="hidden text-center absolute top-[10px] left-0 right-0 z-30 sm:block">
          <p className="!text-[22px] lg:!text-[42px] font-extrabold text-5xl p-4 text-center text-[#FEA71A]">
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
          </p>
          <p className="!text-[22px] lg:!text-[42px] font-extrabold text-[#FEA71A]">
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </p>
          {/* //text-transparent bg-clip-text bg-gradient-to-br from-[#BDA60A] to-[#D6BE27] */}
          <img
            src={"/assets/Ganesh2.svg"}
            alt=""
            className="w-36 mb-3 mx-auto mt-4"
          />
        </div>
        <div className="col-span-3 relative">
          <div className="text-center md:text-[60px]  text-6xl  md:leading-[4rem] my-9 font-lora mt-28 lg:mt-52">
            <span className="block">
              {templateData?.weddingInfo?.groom.name}
            </span>
            <span className="block">&</span>
            <span className="block">
              {templateData?.weddingInfo?.bride.name}
            </span>
          </div>
          <div className="text-center text-[50px] font-Poppins ">
            {moment(templateData?.weddingInfo?.functionDateTime).format(
              "DD-MMM-YYYY"
            )}
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
              // src={staticTemplateData?.gallery_01_1}
              src={templateData?.images.date2}
              id="date2"
              alt=""
              className="object-cover w-[22rem]  h-[27rem] rounded-t-full mt-28"
            />
          </div>
          {/* RIght */}
          <img
            src={"/assets/Swastic.svg"}
            alt=""
            className="w-20 absolute -top-[170px]  right-24 z-30"
          />
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
            D/O {templateData?.weddingInfo?.bride.fatherName} and{" "}
            {templateData?.weddingInfo?.bride.motherName}
          </p>
          {templateData?.weddingInfo?.bride.grandFatherName && (
            <p className="mt-1 !text-[30px]">
              {" "}
              G/D {templateData?.weddingInfo?.bride.grandFatherName} and{" "}
              {templateData?.weddingInfo?.bride.grandMotherName}
            </p>
          )}
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
            S/O {templateData?.weddingInfo?.groom.fatherName} and{" "}
            {templateData?.weddingInfo?.groom.motherName}
          </p>
          {templateData?.weddingInfo?.bride.grandFatherName && (
            <p className="mt-1 !text-[30px]">
              {" "}
              G/S {templateData?.weddingInfo?.bride.grandFatherName} and{" "}
              {templateData?.weddingInfo?.groom.grandMotherName}
            </p>
          )}
          <p className="md:px-20 mt-5 ">
            {templateData?.weddingInfo?.groom.description}
          </p>
        </div>
      </div>

      <div className="relative">
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
          <div className=" text-[20px] lg:w-[40%] grid grid-cols-4 text-center mx-auto z-50 mt-6">
            <div>
              <p className="!font-lora !text-[50px] lg:!text-[50px]">
                {timeRemaining.days}
              </p>
              <p className="!text-[8px]  !font-Poppins lg:!text-base">DAYS</p>
            </div>
            <div>
              <p className="!font-lora  !text-[50px] lg:!text-[50px]">
                {timeRemaining.hours}
              </p>
              <p className="!text-[8px] !font-Poppins lg:!text-base">HOURS</p>
            </div>
            <div>
              <p className="!font-lora  !text-[50px] lg:!text-[50px]">
                {timeRemaining.minutes}
              </p>
              <p className="!text-[8px] !font-Poppins lg:!text-base">MINUTES</p>
            </div>
            <div>
              <p className="!font-lora  !text-[50px] lg:!text-[50px]">
                {timeRemaining.seconds}
              </p>
              <p className="!text-[8px] !font-Poppins lg:!text-base">SECONDS</p>
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
              img={staticTemplateData.occasions3[0].img}
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
                index={index}
                // img={staticTemplateData.stepss[0].img}
                img={steps?.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-2 gap-4 md:px-10 px-2 cursor-pointer my-10">
          {galleryImages().map((image, index) => (
            <div key={index} className={``} onClick={() => openLightbox(index)}>
              <img
                id={`gallery${index + 1}`}
                src={image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        isOpen={isOpen}
        imageIndex={imageIndex}
        onClose={closeLightbox}
        images={galleryImages()}
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
              key={index}
              imgSrc={cards.image}
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
              key={index}
              imgSrc={cards.image}
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
        <div className="text-center max-w-4xl mx-auto my-0 px-10 md:my-0 md:px-0">
          <p className="!font-Poppins !text-[14px]">
            YOU'RE INVITED TO SHARE IN OUR JOY & HAPPINESS
          </p>
          <p className="!font-Poppins md:!text-[70px] !text-[40px] py-6">
            Let's Celebrate True Love
          </p>
          <p className="!font-Poppins !text-[16px] mb-9">
            Please take a moment to fill out the RSVP form below to confirm your
            attendance. We understand that your plans may change, so please feel
            free to update us if any adjustments.
          </p>
          <ContactFormRsvp
            themeColor={staticTemplateData?.themeColor}
            clasNme="mt-[100px] pb-[30px] px-[20px]"
          />
        </div>
      </div>
      <TemplateFooter
        image1={staticTemplateData.couple}
        image2={staticTemplateData.couple}
      />
    </div>
  );
}
export default Template3;
