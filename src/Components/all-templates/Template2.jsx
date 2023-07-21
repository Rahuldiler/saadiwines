import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay } from "swiper";
import Timer from "@/Components/template-components/2/Timer";
import Gallery from "@/Components/template-components/2/Galllery";
import Lightbox from "@/Components/template-components/2/lightBox";
import CoupleInfo from "@/Components/template-components/2/CoupleInfoBox";
import SwiperMain from "@/Components/template-components/2/Slider";
import Steps from "@/Components/template-components/2/steps";
import ContactForm from "@/Components/template-components/2/RsvpForm";
import FamilyCard from "@/Components/template-components/2/FamilyCard";
import moment from "moment";
import TemplateFooter from "../template-components/Footer/footer";

export default function Template2({ templateData, staticTemplateData }) {
  const [imageIndex, setImageIndex] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const targetDate = new Date(templateData.weddingInfo.functionDateTime);

  const openLightbox = (img) => {
    setIsOpen(true);
    setImageIndex(img);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  const slideShowImages = Object.entries(templateData.images)
    .filter(([label]) => label.includes("date"))
    .reduce((acc, [label, imageUrl]) => {
      acc.push({ ["link"]: imageUrl, id: label });
      return acc;
    }, []);

  const galleryImages = () => {
    const galleryKeys = Object.keys(templateData.images).filter((key) =>
      key.startsWith("gallery")
    );
    const imageArray = galleryKeys.map((key) => templateData.images[key]);

    // for (
    //   let i = 0;
    //   i < imageArray.length && i < staticTemplateData.GalleryImg.length;
    //   i++
    // ) {
    //   staticTemplateData.GalleryImg[i]["image"] = imageArray[i];
    // }
    return imageArray;
  };
  galleryImages()
  return (
    <>
      <div className="lg:flex mb-[-265px]">
        <div className="lg:w-[55%] w-full">
          <SwiperMain SliderImg={slideShowImages.slice(0, 2)} />
        </div>
        <div className="lg:w-[45%] relative lg:flex hidden items-center text-center z-10 px-8">
          <div className=" mb-5">
            <CoupleInfo
              name={templateData?.weddingInfo?.groom.name}
              gender="THE GROOM"
              father={templateData?.weddingInfo?.groom.fatherName}
              mother={templateData?.weddingInfo?.groom.motherName}
              grandfather={templateData?.weddingInfo?.groom.grandFatherName}
              grandmother={templateData?.weddingInfo?.groom.grandMotherName}
              infotext1={templateData?.weddingInfo?.groom.description}
            />
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat pt-[150px] pb-[320px] relative "
        style={{
          backgroundImage: staticTemplateData?.bg01,
          backgroundPosition: "top center",
          backgroundSize: "606px auto",
        }}
      >
        <div
          className=" bg-no-repeat h-full w-full top-[0px] left-0 absolute lg:opacity-100 opacity-0"
          style={{
            backgroundImage: staticTemplateData?.bg02,
            backgroundPosition: "center left",
            backgroundSize: "550px auto",
          }}
        ></div>
        <div className="container mx-auto max-w-[1350px] relative px-4">
          <div className="lg:text-left text-center lg:flex lg:mt-0 sm:mt-[100px] mt-[120px] ">
            <div className="lg:w-[60%] z-10">
              <div className="lg:text-left">
                <h1
                  className="lg:text-[150px] sm:text-[100px] text-[50px]"
                  style={{ textShadow: "5px 5px 0px #FFFFFF" }}
                >
                  {templateData?.weddingInfo?.groom.name.split(" ")[0]}
                </h1>
              </div>
            </div>
            <div className="lg:w-[40%] relative lg:hidden items-center text-center">
              <div className=" mb-5">
                <CoupleInfo
                  name={templateData?.weddingInfo?.groom.name}
                  gender="THE GROOM"
                  father={templateData?.weddingInfo?.groom.fatherName}
                  mother={templateData?.weddingInfo?.groom.motherName}
                  grandfather={templateData?.weddingInfo?.groom.grandFatherName}
                  grandmother={templateData?.weddingInfo?.groom.grandMotherName}
                  infotext1={templateData?.weddingInfo?.groom.description}
                />
              </div>
            </div>
          </div>
          <div className="lg:flex relative mt-14 z-10">
            <div className="lg:w-[60%] lg:text-right text-center order-2 lg:order-2">
              <h1
                className="lg:text-[150px] sm:text-[100px] text-[50px] leading-10"
                style={{ textShadow: "5px 5px 0px #FFFFFF" }}
              >
                {templateData?.weddingInfo?.bride.name.split(" ")[0]}
              </h1>
            </div>
            <div className="lg:w-[40%] relative text-center lg:my-0 sm:my-[50px] mt-[25px] mb-[50px] order-1 lg:order-1">
              <div className="lg:hidden block">
                <CoupleInfo
                  name={templateData?.weddingInfo?.bride.name}
                  gender="THE BRIDE"
                  father={templateData?.weddingInfo?.bride.fatherName}
                  mother={templateData?.weddingInfo?.bride.motherName}
                  grandfather={templateData?.weddingInfo?.bride.grandFatherName}
                  grandmother={templateData?.weddingInfo?.bride.grandMotherName}
                  infotext1={templateData?.weddingInfo?.bride.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:mt-[-296px] mt-[-347px] items-center">
        <div className="lg:w-[45%] text-center z-10 px-8">
          <div className=" lg:block hidden">
            <CoupleInfo
              name={templateData?.weddingInfo?.bride.name}
              gender="THE BRIDE"
              father={templateData?.weddingInfo?.bride.fatherName}
              mother={templateData?.weddingInfo?.bride.motherName}
              grandfather={templateData?.weddingInfo?.bride.grandFatherName}
              grandmother={templateData?.weddingInfo?.bride.grandMotherName}
              infotext1={templateData?.weddingInfo?.bride.description}
            />
          </div>
        </div>
        <div className="lg:w-[55%] w-full">
          <SwiperMain SliderImg={slideShowImages.slice(-2)} />
        </div>
      </div>
      <div>
        <div
          className=" bg-no-repeat relative pt-[670px] pb-[220px] "
          style={{
            backgroundImage: staticTemplateData?.bg03,
            backgroundPosition: "center center",
            backgroundSize: "790px auto",
          }}
        >
          <div
            className=" bg-no-repeat h-full w-full left-0 top-0 opacity-100 absolute"
            style={{
              backgroundImage: staticTemplateData?.bg03,
              backgroundPosition: "top left",
              backgroundSize: "284px auto",
            }}
          ></div>
          <div className="max-w-[1350px] lg:mx-auto ml-auto mt-[-460px] mb-5 flex">
            <div className="w-[30%] sm:block hidden pr-[100px]"></div>
            <div className="sm:w-[40%] w-full text-center z-10">
              <h6
                style={{ color: staticTemplateData?.theme?.textColor }}
                className="text-[14px] font-normal tracking-[1px] mb-[20px]"
              >
                Stepping Into Forever
              </h6>
              <h1 className="sm:text-[50px] text-[30px] sm:leading-[60px]">
                Join Us in Celebrating Our Love
              </h1>
            </div>
            <div className="w-[30%] sm:block hidden"></div>
          </div>
          <div className="max-w-[1350px] lg:mx-auto ml-auto sm:flex">
            <div className="lg:w-[33.33%] sm:w-1/4 lg:pr-[100px] sm:px-0 px-3">
              <Image
                src={templateData?.images.gallery8}
                id={"gallery8"}
                alt=""
                width={700}
                height={600}
                className="!relative"
              />
            </div>
            <div className="lg:w-[33.33%] sm:w-1/2 text-center leading-7 z-10 sm:my-0 my-5 px-[25px]">
              <p className="">{templateData?.weddingInfo?.thankYouMessage}</p>
            </div>
            <div className="lg:w-[33.33%] sm:w-1/4 flex justify-end">
              <Image
                src={templateData?.images.gallery3}
                id={"gallery3"}
                alt=""
                fill
                className="!relative rounded-full rounded-r-none lg:!w-[50%] sm:!w-[85%] !w-[60%] !h-[200px] object-cover"
              />
            </div>
          </div>
          <div className="max-w-[1350px] lg:mx-auto ml-auto flex lg:mt-[20px] sm:mt-[-126px] mt-[26px]">
            <div className="lg:w-[35%] w-[10%]"></div>
            <div className="w-[65%] z-10">
              <Timer targetDate={targetDate} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex">
          <div className="lg:sticky lg:w-1/2 lg:h-screen lg:top-0">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="mySwiper"
            >
              {slideShowImages.map((img, id) => {
                return (
                  <SwiperSlide key={id}>
                    <Image
                      alt=""
                      src={img.link}
                      id={img.id}
                      fill
                      className="!relative lg:!h-screen !h-[50vh] object-cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="lg:w-[50%] relative sm:px-[100px] px-[10px]">
            <div
              className=" bg-no-repeat h-full w-full left-0 z-[-9] absolute"
              style={{
                backgroundImage: staticTemplateData?.bg05,
                backgroundPosition: "top right",
                backgroundSize: "322px auto",
              }}
            ></div>
            <div
              className=" bg-no-repeat opacity-100 h-full w-full left-0 top-0 z-[-10] absolute"
              style={{
                backgroundImage: staticTemplateData?.bg06,
                backgroundPosition: "bottom left",
                backgroundSize: "154px auto",
              }}
            ></div>
            <div className="lg:mb-[40%] mb-[20%]">
              {templateData?.milestone?.map((info, id) => {
                return (
                  <div key={info.id} className="lg:mt-[50%]">
                    <h1 className="sm:text-[150px] text-[100px] text-[#02010100] slider-title mb-5">
                      {id + 1}
                    </h1>
                    {/* <h6 className="text-[15px] mb-5">{info.title}</h6> */}
                    <h1 className="sm:text-[50px] text-[30px] mb-5">
                      {info.title}
                    </h1>
                    <p className="mb-5">{info.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-no-repeat  relative"
        style={{
          backgroundColor: staticTemplateData?.theme?.bgColor,
          backgroundPosition: "top left",
          backgroundSize: "121px auto",
          backgroundImage: staticTemplateData?.bg07,
        }}
      >
        <div
          className=" h-full w-full top-0 left-0 absolute mix-blend-multiply opacity-50"
          style={{ backgroundImage: staticTemplateData?.bg08 }}
        ></div>
        <div className="container mx-auto max-w-[1350px] relative">
          <div className="py-[220px] px-[15px]">
            <div className="text-center mb-5">
              <h1
                style={{ color: staticTemplateData?.theme?.textColor }}
                className="sm:text-[100px] text-[30px]"
              >
                Our Love
              </h1>
            </div>
            <div className="text-center mb-5 lg:px-[400px]">
              <p style={{ color: staticTemplateData?.theme?.textColor }}>
                Our couple gallery is a beautiful reflection of our love story.
                Each photograph tells a unique and personal moment of our
                journey together, from the laughter and joy of our engagement to
                the cherished memories of our wedding day.
              </p>
            </div>

            <div>
              {/* <ul className="flex justify-center mb-10">
                <li
                  style={{ color: staticTemplateData?.theme?.textColor }}
                  className={`font-medium sm:px-[14px] pr-[12px] py-[7px] relative ${
                    selectedItem == "All" && "elementor-item-active"
                  }`}
                  onClick={() => setSelectedItem("All")}
                >
                  All
                </li>
                <li
                  style={{ color: staticTemplateData?.theme?.textColor }}
                  className={`font-medium sm:px-[14px] pr-[12px] py-[7px] relative ${
                    selectedItem == "CapturedMemories" &&
                    "elementor-item-active"
                  }`}
                  onClick={() => setSelectedItem("CapturedMemories")}
                >
                  Captured Memories
                </li>
                <li
                  style={{ color: staticTemplateData?.theme?.textColor }}
                  className={`font-medium sm:px-[14px] pr-[12px] py-[7px] relative ${
                    selectedItem == "UnforgettableMoments" &&
                    "elementor-item-active"
                  }`}
                  onClick={() => setSelectedItem("UnforgettableMoments")}
                >
                  Unforgettable Moments
                </li>
              </ul> */}

              {/* {(selectedItem == "All" ||
                selectedItem == "CapturedMemories") && ( */}
              <>
                <Gallery
                  images={staticTemplateData.GalleryImg}
                  paddingBottom="186.523%"
                  columngapcount="4"
                  openLightbox={openLightbox}
                />
                <Lightbox
                  isOpen={isOpen}
                  imageIndex={imageIndex}
                  onClose={closeLightbox}
                  images={templateData.GalleryImg}
                />
              </>
              {/* )} */}

              {/* {selectedItem == "UnforgettableMoments" && (
                <>
                  <Gallery
                    images={GalleryImg1}
                    paddingBottom="89.2504%"
                    columngapcount="2"
                    openLightbox={openLightbox}
                  />
                  <Lightbox
                    isOpen={isOpen}
                    imageIndex={imageIndex}
                    onClose={closeLightbox}
                    images={GalleryImg1}
                  />
                </>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat relative "
        style={{
          backgroundImage: staticTemplateData?.bg08,
          backgroundPosition: "center center",
          backgroundSize: "1000px auto",
        }}
      >
        <div
          className=" bg-no-repeat h-full w-full left-0 top-0 absolute z-[-10]"
          style={{
            backgroundImage: staticTemplateData?.bg09,
            backgroundPosition: "top right",
            backgroundSize: "100px auto",
          }}
        ></div>
        <div className="sm:flex">
          <div className="lg:w-[30%] sm:w-1/4 sm:block hidden relative">
            <div className="mt-[-35px]">
              <Image
                src={templateData.images?.itinerary2}
                id={"itinerary2"}
                alt=""
                width={200}
                height={200}
                className="rounded-full rounded-t-none float-right"
              />
            </div>
            <div className="absolute lg:bottom-[190px] bottom-[290px] lg:left-[50px]">
              <Image
                // src={staticTemplateData?.gallery18}
                src={templateData.images?.itinerary3}
                alt="itinerary3"
                id=""
                width={100}
                height={100}
                className=""
              />
            </div>
            <div className="absolute bottom-[0px] lg:left-[50px]">
              <Image
                // src={templateData.images?.gallery4}
                src={templateData.images?.itinerary4}
                id="itinerary4"
                alt=""
                width={300}
                height={400}
                className=""
              />
            </div>
          </div>
          <div className="lg:w-[40%] sm:w-[50%]">
            <div className="mx-[15px] my-[120px]">
              <div className="text-center">
                <h1
                  className="text-[50px] font-normal mb-5"
                  style={{
                    textShadow: "2px 2px 0px #FFFFFF",
                    color: staticTemplateData?.theme?.textColor,
                  }}
                >
                  Itinerary
                </h1>
              </div>
              {templateData?.itinerary?.map((steps, index) => (
                <div key={steps.id} className={``}>
                  <Steps
                    theme={staticTemplateData?.theme}
                    step={steps.id}
                    fctnName={steps.functionName}
                    location={steps.mapsLocation}
                    dateTime={
                      moment(steps.dateTime).format("l") +
                      " | " +
                      moment(steps.dateTime).format("LT")
                    }
                    fctnInfo={steps.details}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[30%] sm:w-1/4 sm:block hidden relative">
            <div className="mt-[10px]">
              <Image
                alt=""
                src={templateData.images?.itinerary5}
                id="itinerary5"
                width={300}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[120px] right-[0px]">
              <Image
                alt=""
                src={templateData.images?.itinerary6}
                id="itinerary6"
                width={300}
                height={400}
                className=""
              />
            </div>
            <div className="absolute bottom-[0px] right-[200px]">
              <Image
                alt=""
                src={templateData.images?.itinerary7}
                id="itinerary7"
                width={100}
                height={100}
                className="rounded-full rounded-b-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className=" bg-no-repeat relative pt-[100px] lg:pb-[120px]"
        style={{
          backgroundPosition: "top left",
          backgroundSize: "393px auto",
          backgroundImage: staticTemplateData?.bg01,
        }}
      >
        <div
          className=" h-full w-full left-0 top-0 absolute bg-no-repeat opacity-100"
          style={{
            backgroundPosition: "top right",
            backgroundSize: "600px auto",
            backgroundImage: staticTemplateData?.bg11,
          }}
        ></div>
        <div className="container mx-auto max-w-[1350px] relative">
          <div className="text-center">
            <h1
              style={{ color: staticTemplateData?.theme?.textColor }}
              className="sm:text-[50px] text-[30px] font-normal mb-5"
            >
              Important Family Members
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-[70px]">
            {templateData?.familyMembers?.map((card, index) => (
              <FamilyCard
                key={card.id}
                imgSrc={card.image}
                name={card.name}
                relationship={card.relation}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat relative pt-[120px] pb-[120px]"
        style={{
          backgroundImage: staticTemplateData?.bg12,
          backgroundPosition: "bottom center",
          backgroundSize: "1000px auto",
        }}
      >
        <div className="container mx-auto max-w-[1350px] relative">
          <div className="sm:flex">
            <div className="sm:w-[30%]"></div>
            <div className="sm:w-[40%] text-center">
              <div>
                <h2
                  style={{ color: staticTemplateData?.theme?.textColor }}
                  className="lg:text-[50px] text-[35px] font-normal"
                >
                  Points of contacts
                </h2>
              </div>
            </div>
            <div className="sm:w-[30%]"></div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-[70px]">
            {templateData?.pocs?.map((card, index) => (
              <FamilyCard
                key={card.id}
                imgSrc={card.image}
                name={card.firstName}
                relationship={card.relationship}
                contactNo={`+91 ${card.contactNumber}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat  relative"
        style={{
          backgroundColor: staticTemplateData?.theme?.bgColor,
          backgroundPosition: "top left",
          backgroundSize: "150px auto",
          backgroundImage: staticTemplateData?.bg07,
        }}
      >
        <div
          style={{
            backgroundImage: staticTemplateData?.bg01,
          }}
          className=" h-full w-full top-0 left-0 absolute mix-blend-multiply opacity-50"
        ></div>
        <div className="container mx-auto max-w-[1350px] relative">
          <div className="py-[220px] lg:flex">
            <div className="w-[20%]"></div>
            <div className="lg:w-[60%] w-full px-3 lg:px-0 text-center">
              <h6 className="text-[14px] font-normal mb-5 tracking-[1px]">
                Forever in Our Hearts
              </h6>
              <h2
                className="sm:text-[70px] text-[30px] font-normal mb-5"
                style={{
                  textShadow: "5px 5px 0px rgba(0, 0, 0, 0.15)",
                  color: staticTemplateData?.theme?.textColor,
                }}
              >
                Let's Celebrate True Love
              </h2>
              <ContactForm
                staticTemplateData={staticTemplateData}
                rsvpImage={templateData.images.rsvp}
              />
            </div>
            <div className="w-[20%"></div>
          </div>
        </div>
      </div>
      <TemplateFooter
        image1={staticTemplateData.bg12}
        image2={staticTemplateData.bg01}
      />
    </>
  );
}
