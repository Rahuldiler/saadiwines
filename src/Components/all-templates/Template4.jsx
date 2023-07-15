import React, { useEffect, useState } from "react";
import moment from "moment";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import { templateInfoData } from "@/constants/templateInfo";
import Clock4 from "@/Components/template-components/4/Clock";
import Milestone4 from "@/Components/template-components/4/Milestone";
import Itinerary from "@/Components/template-components/4/Itinerary";
import FamilyCards from "@/Components/template-components/4/FmailyCards";
import PointOfContact from "@/Components/template-components/4/PointOfContact";
import ContactForm from "@/Components/template-components/4/RsvpForm4";
import Lightbox from "../template-components/4/lightBox";

function Template4({ templateData, staticTemplateData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [isOpen, setIsOpen] = useState(false);
  const [rsvp, setRsvp] = useState(true);
  const [isOpenRsvp, setIsOpenRsv] = useState(false);
  const [imageIndex, setImageIndex] = useState();
  // const [templateData, setTemplateData] = useState();
  // useEffect(() => {
  //     formData ? setTemplateData(formData) : setTemplateData(templateInfoData);
  //   }, [formData]);
  const slides = [
    {
      id: 1,
      image: "/assets/templete/4/sliderImages/slide-4.jpg",
      caption1: " Christin & Thomas ",
      caption2: " 16/04/2030",
    },
    {
      id: 2,
      image: "/assets/templete/4/sliderImages/slide-5.jpg",
      caption1: " Christn & Thomas ",
      caption2: " 16/04/2030",
    },
    {
      id: 3,
      image: "/assets/templete/4/sliderImages/slide-6.jpg",
      caption1: " Christin & Thomas ",
      caption2: " 16/04/2030",
    },
  ];

  const images = [
    { id: 1, image: "/assets/templete/4/gallery/gallery-1.jpg" },
    { id: 2, image: "/assets/templete/4/gallery/gallery-5.jpg" },
    { id: 3, image: "/assets/templete/4/gallery/project-grid-3.jpg" },
    { id: 4, image: "/assets/templete/4/gallery/project-grid-4.jpg" },
    { id: 5, image: "/assets/templete/4/gallery/project-grid-5.jpg" },
    { id: 6, image: "/assets/templete/4/gallery/project-grid-6.jpg" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };


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


  return (
    <div>
      <div className="h-[900px] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute -top-[16px] bg-black left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute top-0 left-0 bg-black w-full h-full opacity-30">
              {" "}
            </div>
            <img
              src={slide.image}
              alt={slide.caption1}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white  w-max ">
              <div className="relative  px-3 lg:px-16 py-20">
                <div
                  className={`!font-Futura text-center text-[45px]  lg:w-auto lg:text-[65px] ${
                    currentSlide ? "text-[65px]" : ""
                  } transition-all duration-500`}
                >
                  {templateData?.weddingInfo?.groom.name.split(" ")[0]} &{" "}
                  {templateData?.weddingInfo?.bride.name.split(" ")[0]}
                </div>
                <div className="text-center text-[20px] lg:text-[30px] tracking-wider">
                  We Are Getting Married{" "}
                  {moment(templateData?.weddingInfo?.dateTime).format("L")}
                </div>
                <div className="absolute -top-[35px] right-0 max-w-[45%]">
                  <img src={staticTemplateData?.shape3} alt="" className="  " />
                </div>
                <div className="absolute -bottom-[35px] left-0 max-w-[45%]">
                  <img src={staticTemplateData?.shape4} alt="" className="  " />
                </div>
                {/* <div className="absolute -bottom-[55px] left-0"><img src="/assets/template4/sliderImages/shape4.png" alt=""/></div> */}
                <div className="absolute left-0 top-0 bg-white h-[1px] w-[13rem] lg:w-[26rem]"></div>
                <div className="absolute bottom-[1px] right-0 bg-white h-[1px] w-[13rem] lg:w-[26rem]"></div>
                <div className="absolute top-[97px] left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[1px] w-[193px] rotate-90"></div>
                <div className="absolute bottom-[97px] -right-[94px] bg-white h-[1px] w-[190px] rotate-90"></div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4 ">
          <button
            className="px-4 py-2 text-white absolute top-1/2 left-0 transform -translate-x-0 -translate-y-1/2"
            onClick={prevSlide}
          >
            {" "}
            <ChevronLeftIcon className="w-8" />{" "}
          </button>
          <button
            className="px-4 py-2 text-white  absolute top-1/2 right-0 transform -translate-x-0 -translate-y-1/2 "
            onClick={nextSlide}
          >
            {" "}
            <ChevronRightIcon className="w-8" />{" "}
          </button>
        </div>
      </div>

      <div>
        <Clock4
          title="Our Wedding"
          text="MISSING DAYS TO"
          img={staticTemplateData?.icon02}
          propName="clock"
          staticTemplateData={staticTemplateData}
        />
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 mt-20 max-w-7xl mx-auto gap-y-5 lg:gap-y-0">
        <div className="col-span-1 flex items-center mb-20 lg:mb-0">
          <div className="lg:text-right text-center my-auto">
            <img
              src={staticTemplateData?.couple_man}
              alt=""
              className="rounded-full mb-3 lg:mx-0 lg:ml-auto mx-auto"
            />
            <h3 className="text-[22px] mb-2 font-Futura font-semibold">
              {templateData?.weddingInfo?.groom.name}
            </h3>
            <p className="mb-1">
              S/O  {templateData?.weddingInfo?.groom?.fatherName} and {" "}
              {templateData?.weddingInfo?.groom?.motherName}
            </p>
            <p className="mb-2">
              G/S  {templateData?.weddingInfo?.groom?.grandFatherName} and {" "}
              {templateData?.weddingInfo?.groom?.grandMotherName}
            </p>
            <p className="font-Mulish text-[#848892] text-[16px] px-5 lg:px-0">
              {templateData?.weddingInfo?.groom?.description}
            </p>
          </div>
        </div>
        <div className="col-span-2 relative mx-auto mb-20 lg:mb-0">
          <img
            src={staticTemplateData?.couple_image}
            alt=""
            className="rounded-full !max-w-[85%] lg:!max-w-full object-cover mx-auto"
          />
          <img
            src={staticTemplateData?.frame_shape}
            alt=""
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:!w-[35rem] lg:!h-[46rem] w-[26rem] h-[34rem] !max-w-none"
          />
        </div>
        <div className="col-span-1 flex items-center">
          <div className="lg:text-left text-center my-auto">
            <img
              src={staticTemplateData?.frame_woment}
              alt=""
              className="lg:mb-3 mx-auto rounded-full lg:mx-0"
            />
            <h3 className="text-[22px] mb-2 font-Futura font-semibold">
              {templateData?.weddingInfo?.bride?.name}
            </h3>
            <p className="mb-1">
              d/o  {templateData?.weddingInfo?.bride?.fatherName} and {" "}
              {templateData?.weddingInfo?.bride?.motherName}
            </p>
            <p className="mb-2">
              g/d  {templateData?.weddingInfo?.bride?.grandFatherName} and {" "}
              {templateData?.weddingInfo?.bride?.grandMotherName}
            </p>
            <p className="font-Mulish text-[#848892] text-[16px]">
              {templateData?.weddingInfo?.bride?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="text-center mb-20">
          <p>
            <img
              src={staticTemplateData?.section_title2}
              alt=""
              className="mx-auto w-64"
            />
          </p>
          <p
            style={{ color: staticTemplateData?.theme?.textColor }}
            className="!text-[40px] !font-medium !font-Futura mt-5"
          >
            OUR LOVE STORY
          </p>
          <div className="relative">
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px]  h-[2px] border-b-[1px] absolute top-1/2 left-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
            <div
              style={{ borderColor: staticTemplateData?.theme?.textColor }}
              className="w-[1rem] h-[1rem] mx-auto rounded-full border-[1px] border-[#86a0b6]"
            ></div>
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px] h-[2px] border-b-[1px] absolute top-1/2 right-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
          </div>
        </div>
        {templateData?.milestone?.map((steps, index) => (
          <div key={index} className={``}>
            <Milestone4
              title={steps.title}
              description={steps.description}
              id={steps.id}
              staticTemplateData={staticTemplateData}
            />
          </div>
        ))}
      </div>

      <div className="my-24">
        <div className="text-center mb-20">
          <p>
            <img
              src={staticTemplateData?.section_title2}
              alt=""
              className="mx-auto w-64"
            />
          </p>
          <p
            style={{ color: staticTemplateData?.theme?.textColor }}
            className="!text-[40px] !font-medium text-[#002642] !font-Futura mt-5 uppercase"
          >
            Itinerary
          </p>
          <div className="relative">
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px]  h-[2px] border-b-[1px] absolute top-1/2 left-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
            <div
              style={{ borderColor: staticTemplateData?.theme?.textColor }}
              className="w-[1rem] h-[1rem] mx-auto rounded-full border-[1px] border-[#86a0b6]"
            ></div>
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px] h-[2px] border-b-[1px] absolute top-1/2 right-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
          </div>
        </div>
        <div className="grid lg:lg:grid-cols-[repeat(auto-fit,_30.666666%)] grid-cols-1 max-w-[90rem] mx-auto text-center  gap-14 ">
          {templateData?.itinerary?.map((steps, index) => (
            <div
              key={index}
              style={{ borderColor: staticTemplateData?.theme?.bgColor }}
              className={`border-[2px] p-5 relative`}
            >
              <Itinerary
                functionName={steps.functionName}
                dateTime={steps.dateTime}
                description={steps.details}
                image={steps.image}
                mapsLocation={steps.mapsLocation}
                staticTemplateData={staticTemplateData}
              />
              <img
                src={staticTemplateData?.event_shape1}
                alt=""
                className="absolute px-3 -top-[15px] -right-[5px] bg-white"
              />
              <img
                src={staticTemplateData?.event_shape2}
                alt=""
                className="absolute px-3 -bottom-[15px] -left-[5px] bg-white"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="text-center mb-20">
          <p>
            <img
              src={staticTemplateData?.section_title2}
              alt=""
              className="mx-auto w-64"
            />
          </p>
          <p
            style={{ color: staticTemplateData?.theme?.textColor }}
            className="!text-[40px] !font-medium text-[#002642] !font-Futura mt-5 uppercase"
          >
            SWEET MOMENTS
          </p>
          <div className="relative">
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px]  h-[2px] border-b-[1px] absolute top-1/2 left-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
            <div
              style={{ borderColor: staticTemplateData?.theme?.textColor }}
              className="w-[1rem] h-[1rem] mx-auto rounded-full border-[1px] border-[#86a0b6]"
            ></div>
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px] h-[2px] border-b-[1px] absolute top-1/2 right-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 cursor-pointer px-5 gap-5 mb-10">
          {images.map((image, index) => (
            <div
              key={index}
              className={`border-[1px] border-black`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          <Lightbox
        isOpen={isOpen}
        imageIndex={imageIndex}
        onClose={closeLightbox}
        images={images}
      />
        </div>
      </div>

      <div className="my-24">
        <div className="text-center mb-20">
          <p>
            <img
              src={staticTemplateData?.section_title2}
              alt=""
              className="mx-auto w-64"
            />
          </p>
          <p
            style={{ color: staticTemplateData?.theme?.textColor }}
            className="!text-[40px] !font-medium text-[#002642] !font-Futura mt-5 uppercase"
          >
            Important Family Members
          </p>
          <div className="relative">
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px]  h-[2px] border-b-[1px] absolute top-1/2 left-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
            <div
              style={{ borderColor: staticTemplateData?.theme?.textColor }}
              className="w-[1rem] h-[1rem] mx-auto rounded-full border-[1px] border-[#86a0b6]"
            ></div>
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px] h-[2px] border-b-[1px] absolute top-1/2 right-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 max-w-[90rem] mx-auto text-center  gap-10 ">
          {templateData?.familyMembers?.map((steps, index) => (
            <div
              key={index}
              style={{ borderColor: staticTemplateData?.theme?.bgColor }}
              className={`border-[2px] p-5 relative`}
            >
              <FamilyCards
                name={steps.name}
                relation={steps.relation}
                image={steps.image}
                staticTemplateData={staticTemplateData}
              />
              <img
                src={staticTemplateData?.event_shape1}
                alt=""
                className="absolute px-3 -top-[15px] -right-[5px] bg-white"
              />
              <img
                src={staticTemplateData?.event_shape2}
                alt=""
                className="absolute px-3 -bottom-[15px] -left-[5px] bg-white"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p>
          <img
            src={staticTemplateData?.section_title2}
            alt=""
            className="mx-auto w-64"
          />
        </p>
        <p
          style={{ color: staticTemplateData?.theme?.textColor }}
          className="!text-[40px] !font-medium text-[#002642] !font-Futura mt-5 uppercase"
        >
          Thank you
        </p>
        <h2 className="lg:!text-[30px] !text-[20px] !font-medium !text-[#002642] !font-Futura mt-5 lg:px-20 px-9 uppercase">
          {templateData?.weddingInfo?.thankYouMessage}
        </h2>
      </div>

      <div className="my-24">
        <div className="text-center mb-20">
          <p>
            <img
              src={staticTemplateData?.section_title2}
              alt=""
              className="mx-auto w-64"
            />
          </p>
          <p
            style={{ color: staticTemplateData?.theme?.textColor }}
            className="!text-[40px] !font-medium text-[#002642] !font-Futura mt-5 uppercase"
          >
            Point Of Contact
          </p>
          <div className="relative">
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px]  h-[2px] border-b-[1px] absolute top-1/2 left-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
            <div
              style={{ borderColor: staticTemplateData?.theme?.textColor }}
              className="w-[1rem] h-[1rem] mx-auto rounded-full border-[1px] border-[#86a0b6]"
            ></div>
            <div
              style={{ backgroundColor: staticTemplateData?.theme?.textColor }}
              className="min-w-[140px] h-[2px] border-b-[1px] absolute top-1/2 right-[51%] transform bg-[#86a0b6] -translate-y-1/2"
            ></div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[repeat(auto-fit,_30.666666%)] justify-center max-w-[90rem] mx-auto text-center gap-10 ">
          {templateData?.pocs?.map((steps, index) => (
            <div
              key={index}
              style={{ borderColor: staticTemplateData?.theme?.bgColor }}
              className={`border-[2px] p-5 relative`}
            >
              <PointOfContact
                contactNumber={steps.contactNumber}
                firstName={steps.firstName}
                fromSide={steps.fromSide}
                image={steps.image}
                lastName={steps.lastName}
                staticTemplateData={staticTemplateData}
              />
              <img
                src={staticTemplateData?.event_shape1}
                alt=""
                className="absolute px-3 -top-[15px] -right-[5px] bg-white"
              />
              <img
                src={staticTemplateData?.event_shape2}
                alt=""
                className="absolute px-3 -bottom-[15px] -left-[5px] bg-white"
              />
            </div>
          ))}
        </div>
      </div>

      {rsvp && (
        <div className="pb-10">
          <ContactForm staticTemplateData={staticTemplateData} />
        </div>
      )}
    </div>
  );
}
export default Template4;
