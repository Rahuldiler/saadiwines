import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "react-slideshow-image/dist/styles.css";
import moment from "moment";
import GreenStrip from "@/Components/template-components/1/greenStrip";
import CoupleInfo from "@/Components/template-components/1/coupleInfoBox";
import Double from "@/Components/template-components/1/double";
import ContactForm from "@/Components/template-components/1/rsvpForm";
import Lightbox from "@/Components/template-components/1/lightBox";
import Cards from "@/Components/template-components/1/Cards";
import Steps from "@/Components/template-components/1/steps";
import TemplateFooter from "../template-components/Footer/footer";

function Template1({ templateData, staticTemplateData, images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageIndex, setImageIndex] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const targetDate = new Date(2024, 5, 18);

  const openLightbox = (img) => {
    setIsOpen(true);
    setImageIndex(img);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  // Filter the images for DATE1 and DATE2 labels
  const slideShowImages = Object.entries(templateData.images)
    .filter(([label]) => label === "date1" || label === "date2")
    .reduce((acc, [label, imageUrl]) => {
      acc[label] = imageUrl;
      return acc;
    }, {});

  const galleryImages = () => {
    const galleryKeys = Object.keys(templateData.images).filter((key) =>
      key.startsWith("gallery")
    );
    const imageArray = galleryKeys.map((key) => templateData.images[key]);
    return imageArray;
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Object.keys(slideShowImages).length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Object.keys(slideShowImages).length - 1 : prevSlide - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);
  const [rsvp, setRsvp] = useState(true);

  return (
    <div className="lg:min-w-[1280px] ">
      <div className="h-[900px] relative">
        {Object.entries(slideShowImages).map(([label, imageUrl], index) => (
          <div
            key={index}
            className={`absolute top-0 bg-black left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute top-0 left-0 bg-black w-full h-full opacity-30">
              {" "}
            </div>
            <img src={imageUrl} className="object-cover w-full h-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white  w-max ">
              <div
                className={`!font-Alex text-center text-[50px] w-56 lg:w-auto lg:text-[120px] ${
                  currentSlide ? "text-[120px]" : ""
                } transition-all duration-500`}
              >
                {templateData?.weddingInfo?.groom.name.split(" ")[0]} &{" "}
                {templateData?.weddingInfo?.bride.name.split(" ")[0]}
              </div>
              <div className="text-center text-[30px] tracking-wider">
                {moment(templateData?.weddingInfo?.dateTime).format(
                  "DD-MMM-YYYY"
                )}
              </div>
            </div>
          </div>
        ))}

        <div>
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

      <GreenStrip
        title="Our Wedding"
        text="MISSING DAYS TO"
        img="/images/icon-02.png"
        propName="clock"
        theme={staticTemplateData?.theme}
        targetDate={targetDate}
        weddingDayURL={staticTemplateData?.images.weddingDayURL}
        waterColorIMG={staticTemplateData?.images.waterColorIMG}
        swiperSlide1={staticTemplateData?.images.swiperSlide1}
        swiperSlide2={staticTemplateData?.images.swiperSlide2}
        swiperSlide3={staticTemplateData?.images.swiperSlide3}
        swiperSlide4={staticTemplateData?.images.swiperSlide4}
        swiperSlide5={staticTemplateData?.images.swiperSlide5}
        swiperSlide6={staticTemplateData?.images.swiperSlide6}
      />

      {templateData && (
        <div
          className={`lg:p-24 py-28 p-4 lg:flex justify-between  `}
          style={{
            backgroundImage: `url(${templateData?.images.introduction})`,
            backgroundClip: "border-box",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <CoupleInfo
            bgImage={staticTemplateData?.images.waterColor}
            name={templateData?.weddingInfo?.groom.name}
            gender="THE GROOM"
            father={templateData?.weddingInfo?.groom.fatherName}
            mother={templateData?.weddingInfo?.groom.motherName}
            grandfather={templateData?.weddingInfo?.groom.grandFatherName}
            grandmother={templateData?.weddingInfo?.groom.grandMotherName}
            infotext1={templateData?.weddingInfo?.groom.description}
            // infotext2=" On this special day, I want to express my gratitude to my partner - my rock, my confidant, my love. Christin, you bring out the best in me, and I'm honored to call you my partner for life. I promise to love you always."
          />

          <CoupleInfo
            bgImage={staticTemplateData?.images.waterColor}
            name={templateData && templateData?.weddingInfo?.bride.name}
            gender="THE BRIDE"
            father={templateData && templateData?.weddingInfo?.bride.fatherName}
            mother={templateData && templateData?.weddingInfo?.bride.motherName}
            grandfather={
              templateData && templateData?.weddingInfo?.bride.grandFatherName
            }
            grandmother={
              templateData && templateData?.weddingInfo?.bride.grandMotherName
            }
            infotext1={
              templateData && templateData?.weddingInfo?.bride.description
            }
            // infotext2=" Today, I feel like I'm living in a fairytale - marrying the love of my life and surrounded by all of our family and friends. Every detail of this wedding has been a labor of love, as the carefully selected flowers."
          />
        </div>
      )}

      {templateData?.milestone?.map((milestone, index) => {
        return (
          <Double
            waterColor={staticTemplateData?.images.waterColor02}
            key={index}
            img={staticTemplateData?.images.double1}
            title={milestone.title}
            subtitle="11:30 am In The Square"
            infotext={milestone.description}
            imgPostion={index % 2 == 0 ? "left" : ""}
            hoverTitle="St Paul Park"
            hoverText="Today, we celebrate the love and commitment of this wonderful couple."
            theme={staticTemplateData?.theme}
          />
        );
      })}
      <div>
        <p className="!font-Alex !text-[40px] lg:text-[100px] text-center mt-16">
          Itinerary
        </p>
        {/* <p className="text-center mt-1 mb-10">WEDDING</p> */}
        <div className="grid lg:grid-cols-2  lg:px-20 py-14">
          <div className="px-8">
            <img src={templateData?.images.itinerary} alt="" className="" />
            {/* <p className="!font-Alex !text-[50px] text-center mt-5">
              Wedding Menu
            </p>
            <p className=" text-center lg:px-14 ">
              We are proud to present a menu that reflects our love for both
              classic and contemporary cuisine. Our chef has artfully combined
              traditional recipes with innovative techniques, resulting in a
              dining experience.
            </p> */}
          </div>
          <div className="px-8 mt-16 lg:mt-auto">
            {templateData?.itinerary?.map((steps, index) => (
              <div key={index} className={``}>
                <Steps
                  step={steps.id}
                  fctnName={steps.functionName}
                  location={steps.mapsLocation}
                  dateTime={moment(steps.dateTime).format("LLLL")}
                  fctnInfo={steps.details}
                  themeColor={staticTemplateData.theme}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 cursor-pointer">
          {galleryImages().map((image, index) => {
            return (
              <div
                key={index}
                className={``}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
      <Lightbox
        isOpen={isOpen}
        imageIndex={imageIndex}
        onClose={closeLightbox}
        images={galleryImages()}
      />

      <div style={{ backgroundImage: staticTemplateData?.images.waterColor02 }}>
        <p className="!font-Alex !text-[40px] lg:!text-[100px] text-center mt-16 lg:mt-0 pt-16 ">
          Important Family Members
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-20 py-14 `}
        >
          {templateData?.familyMembers?.map((cards, index) => (
            <Cards
              theme={staticTemplateData?.theme}
              key={index}
              imgSrc={staticTemplateData.avatars[index]}
              name={cards.name}
              relationship={cards.relation}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundColor: staticTemplateData.theme.bgColor,
          color: staticTemplateData.theme.textColor,
        }}
        className={`bg-[${staticTemplateData.theme.bgColor}]  relative`}
      >
        <div
          className="absolute top-0 left-0  opacity-100 mix-blend-multiply  w-[100%] h-[100%] bg-cover bg-no-repeat bg-[center_top]"
          style={{ backgroundImage: staticTemplateData?.images.waterColor02 }}
        />
        <div className="lg:px-36 px-4">
          <div className="py-20 text-center">
            {templateData && (
              <p className={`lg:px-[320px] px-8 mb-10 `}>
                {templateData?.weddingInfo?.thankYouMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <div></div>
      <div style={{ backgroundImage: staticTemplateData?.images.waterColor02 }}>
        <p className="!font-Alex !text-[40px] lg:!text-[100px] text-center mt-16 lg:mt-0 pt-16 ">
          Points of contacts
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-20 py-14 `}
        >
          {templateData?.pocs?.map((cards, index) => (
            <Cards
              theme={staticTemplateData?.theme}
              key={index}
              imgSrc={staticTemplateData.avatars[0]}
              name={cards.firstName}
              contactNo={`+91 ${cards.contactNumber}`}
            />
          ))}
        </div>
      </div>

      {rsvp && (
        <div
          className=" lg:py-[32rem] py-[450px] relative bg-cover "
          style={{ backgroundImage: `url(${templateData?.images.rsvp})` }}
        >
          <div className="absolute top-0 left-0  opacity-50  w-[100%] h-[100%] bg-black "></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[650px] mx-auto px-28 lg:px-auto py-28 bg-cover z-50"
            style={{
              backgroundImage: staticTemplateData?.images.waterColor02,
            }}
          >
            <p>R.S.V.P</p>
            <p className="!font-Alex !text-[30px] lg:!text-[50px] lg:px-28 mb-12">
              Confirmation at Marriage
            </p>
            <ContactForm themeColor={staticTemplateData?.theme} />
          </div>
        </div>
      )}
      {/* <div
        className="text-center py-20 lg:py-14  bg-right-top bg-no-repeat bg-contain relative"
        style={{ backgroundImage: staticTemplateData?.images.waterColor02 }}
      >
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50  lg:w-[240px] lg:h-[260px] bg-[length:235px_auto] bg-no-repeat"
          style={{ backgroundImage: staticTemplateData?.images.leaf03 }}
        ></span>
        <p className="!font-Alex !text-[30px] lg:!text-[50px] mb-3">
          {templateData?.weddingInfo?.groom.name.split(" ")[0]} &
          {templateData?.weddingInfo?.bride.name.split(" ")[0]}
        </p>
        <p className="!font-Cardo">MADE WITH LOVE IN JAIPUR</p>
      </div> */}
      <TemplateFooter
        image1={staticTemplateData?.images.waterColor02}
        image2={staticTemplateData?.images.leaf03}
      />
    </div>
  );
}

export default Template1;
