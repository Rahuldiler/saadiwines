import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
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
import { useEffect } from "react";
import { templateInfoData } from "@/constants/templateInfo";
import moment from "moment";

export default function TemplateTwo({ templateData, staticTemplateData }) {
  const [selectedItem, setSelectedItem] = useState("All");
  const [imageIndex, setImageIndex] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const targetDate = new Date(2023, 5, 18);

  const openLightbox = (img) => {
    setIsOpen(true);
    setImageIndex(img);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const GalleryImg = [
    {
      image: "/assets/templete/2/gallery/paral-01.jpg",
      alt: "Image 1",
      itemHeight: "67.29166666666667%",
      percentHeight: "0%",
      column: 0,
      itemsInColumn: 0,
    },
    {
      image: "/assets/templete/2/gallery/paral-02.jpg",
      alt: "Image 2",
      itemHeight: "100%",
      percentHeight: "0%",
      column: 1,
      itemsInColumn: 0,
    },
    {
      image: "/assets/templete/2/gallery/paral-03.jpg",
      alt: "Image 3",
      itemHeight: "100%",
      percentHeight: "17.491809735226195%",
      column: 0,
      itemsInColumn: 1,
    },
    {
      image: "/assets/templete/2/gallery/paral-04.jpg",
      alt: "Image 4",
      itemHeight: "100%",
      percentHeight: "25.994020659159673%",
      column: 1,
      itemsInColumn: 1,
    },
    {
      image: "/assets/templete/2/gallery/paral-05.jpg",
      alt: "Image 5",
      itemHeight: "100%",
      percentHeight: "43.48583039438586%",
      column: 0,
      itemsInColumn: 2,
    },
    {
      image: "/assets/templete/2/gallery/paral-06.jpg",
      alt: "Image 6",
      itemHeight: "66.66666666666666%",
      percentHeight: "51.98804131831935%",
      column: 1,
      itemsInColumn: 2,
    },
    {
      image: "/assets/templete/2/gallery/paral-07.jpg",
      alt: "Image 7",
      itemHeight: "48.541666666666664%",
      percentHeight: "69.47985105354553%",
      column: 0,
      itemsInColumn: 3,
    },
    {
      image: "/assets/templete/2/gallery/paral-08.jpg",
      alt: "Image 8",
      itemHeight: "68.87052341597796%",
      percentHeight: "69.31738842442579%",
      column: 1,
      itemsInColumn: 3,
    },
    {
      image: "/assets/templete/2/gallery/paral-09.jpg",
      alt: "Image 9",
      itemHeight: "68.87052341597796%",
      percentHeight: "82.0977819151793%",
      column: 0,
      itemsInColumn: 4,
    },
  ];

  const GalleryImg1 = [
    {
      image: "/assets/templete/2/gallery/paral-05.jpg",
      alt: "Image 5",
      itemHeight: "100%",
      percentHeight: "0%",
      column: 0,
      itemsInColumn: 0,
    },
    {
      image: "/assets/templete/2/gallery/paral-06.jpg",
      alt: "Image 6",
      itemHeight: "66.66666666666666%",
      percentHeight: "0%",
      column: 1,
      itemsInColumn: 0,
    },
    {
      image: "/assets/templete/2/gallery/paral-07.jpg",
      alt: "Image 7",
      itemHeight: "48.541666666666664%",
      percentHeight: "36.216362837073135%",
      column: 1,
      itemsInColumn: 1,
    },
    {
      image: "/assets/templete/2/gallery/paral-08.jpg",
      alt: "Image 8",
      itemHeight: "68.87052341597796%",
      percentHeight: "54.324544255609695%",
      column: 0,
      itemsInColumn: 1,
    },
    {
      image: "/assets/templete/2/gallery/paral-09.jpg",
      alt: "Image 9",
      itemHeight: "68.87052341597796%",
      percentHeight: "62.58640202781701%",
      column: 1,
      itemsInColumn: 2,
    },
  ];

  const stepss = [
    {
      id: 1,
      stp: "1",
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
      dateTime: "5/jun/2023 | 12:30pm",
      location:
        "https://www.google.com/maps/place/C+R+Park+Market+No.1/@28.5350621,77.2431712,13.75z/data=!4m6!3m5!1s0x390ce3d83e0cb4b7:0xb7ece1334b216b84!8m2!3d28.5401153!4d77.2486233!16s%2Fg%2F1wk4bfx6?entry=ttu",
      functionInfo:
        " The party with music is the perfect way to celebrate the newlyweds and their love story. This is a time for guests to let loose, hit the dance floor, and enjoy some great music.",
    },
    {
      id: 4,
      stp: "4",
      functionName: " Cake Cutting ",
      dateTime: "5/jun/2023 | 12:30pm",
      location:
        "https://www.google.com/maps/place/Vivanta+Surajkund/@28.5435843,77.2614842,12.28z/data=!4m9!3m8!1s0x390cdc0daaaaaaab:0xd76f205f7679d870!5m2!4m1!1i2!8m2!3d28.4898296!4d77.2849204!16s%2Fg%2F11c71b1922?entry=ttu",
      functionInfo:
        " The cake cutting is a special moment that symbolizes the couple's union and their commitment to sharing their lives together and it's a tradition that dates back centuries.",
    },
  ];

  const SliderImg = [
    {
      id: 1,
      link: "/assets/templete/2/slider-1.jpg",
    },
    {
      id: 2,
      link: "/assets/templete/2/slider-2.jpg",
    },
  ];

  const SliderImg1 = [
    {
      id: 1,
      link: "/assets/templete/2/paral-1.jpg",
    },
    {
      id: 2,
      link: "/assets/templete/2/paral-2.jpg",
    },
  ];

  const weddingImg = [
    {
      id: 1,
      link: "/assets/templete/2/post-01.jpg",
    },
    {
      id: 2,
      link: "/assets/templete/2/post-02.jpg",
    },
    {
      id: 3,
      link: "/assets/templete/2/post-03.jpg",
    },
  ];

  const information = [
    {
      id: "01",
      title: "Official Ceremony",
      shorttextinfo: "Official Ceremony",
      description1:
        "Welcome to this beautiful park, where we gather to celebrate our wedding. As we look around us, we can't help but be struck by the natural beauty that surrounds us. From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion. As we stand here today, surrounded by the beauty of this park, we are reminded of the enduring power of love.",
    },
    {
      id: "02",
      title: "Lunch at the Villa",
      shorttextinfo: "Lunch at the Villa",
      description1:
        "The villa's garden is truly a work of art, with carefully cultivated flower beds and winding paths that invite us to explore the natural beauty around us. The gentle breeze that brushes against our skin and the chirping of the birds add to the enchanting ambiance that surrounds us. It's the perfect setting for a wedding reception, as it allows us to enjoy delicious food and drinks while basking in the splendor of the best flowery nature.",
    },
  ];

  const impoFamily = [
    {
      id: 1,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 2,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 3,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 4,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 5,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 6,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
  ];

  const contant = [
    {
      id: 1,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 2,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 3,
      image: "/assets/templete/2/gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
  ];

  return (
    <>
      <div className="lg:flex mb-[-265px]">
        <div className="lg:w-[55%] w-full">
          <SwiperMain SliderImg={SliderImg} />
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
        className="bg-[url('/assets/templete/2/bg-01.jpg')] bg-no-repeat pt-[150px] pb-[320px] relative "
        style={{
          backgroundPosition: "top center",
          backgroundSize: "606px auto",
        }}
      >
        <div
          className="bg-[url('/assets/templete/2/bg-02.jpg')] bg-no-repeat h-full w-full top-[0px] left-0 absolute lg:opacity-100 opacity-0"
          style={{
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
          <SwiperMain SliderImg={SliderImg} />
        </div>
      </div>
      <div>
        <div
          className="bg-[url('/assets/templete/2/bg-03.jpg')] bg-no-repeat relative pt-[670px] pb-[220px] "
          style={{
            backgroundPosition: "center center",
            backgroundSize: "790px auto",
          }}
        >
          <div
            className="bg-[url('/assets/templete/2/bg-04.jpg')] bg-no-repeat h-full w-full left-0 top-0 opacity-100 absolute"
            style={{
              backgroundPosition: "top left",
              backgroundSize: "284px auto",
            }}
          ></div>
          <div className="max-w-[1350px] lg:mx-auto ml-auto mt-[-460px] mb-5 flex">
            <div className="w-[30%] sm:block hidden pr-[100px]"></div>
            <div className="sm:w-[40%] w-full text-center z-10">
              <h6 className="text-[14px] font-normal tracking-[1px] mb-[20px]">
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
                src="/assets/templete/2/gallery-08.jpg"
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
                src="/assets/templete/2/gallery-05.jpg"
                alt=""
                fill
                className="!relative rounded-full rounded-r-none lg:!w-[50%] sm:!w-[85%] !w-[60%] !h-[200px]"
              />
            </div>
          </div>
          <div className="max-w-[1350px] lg:mx-auto ml-auto flex lg:mt-[-100px] sm:mt-[-126px] mt-[-26px]">
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
              {SliderImg1.map((img, id) => {
                return (
                  <SwiperSlide key={id}>
                    <Image
                      alt=""
                      src={img.link}
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
              className="bg-[url('/assets/templete/2/bg-05.jpg')] bg-no-repeat h-full w-full left-0 z-[-9] absolute"
              style={{
                backgroundPosition: "top right",
                backgroundSize: "322px auto",
              }}
            ></div>
            <div
              className="bg-[url('/assets/templete/2/bg-06.jpg')] bg-no-repeat opacity-100 h-full w-full left-0 top-0 z-[-10] absolute"
              style={{
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
                    <h6 className="text-[15px] mb-5">{info.title}</h6>
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
        className="bg-[url('/assets/templete/2/bg-07.png')] bg-no-repeat bg-[#80A0C2] relative"
        style={{ backgroundPosition: "top left", backgroundSize: "121px auto" }}
      >
        <div className="bg-[url('/assets/templete/2/bg-08.jpg')] h-full w-full top-0 left-0 absolute mix-blend-multiply opacity-50"></div>
        <div className="container mx-auto max-w-[1350px] relative">
          <div className="py-[220px] px-[15px]">
            <div className="text-center mb-5">
              <h1 className="sm:text-[100px] text-[30px] text-white">
                Our Love
              </h1>
            </div>
            <div className="text-center mb-5 lg:px-[400px]">
              <p className="text-white">
                Our couple gallery is a beautiful reflection of our love story.
                Each photograph tells a unique and personal moment of our
                journey together, from the laughter and joy of our engagement to
                the cherished memories of our wedding day.
              </p>
            </div>

            <div>
              <ul className="flex justify-center mb-10">
                <li
                  className={`font-medium sm:px-[14px] pr-[12px] py-[7px] text-white relative ${
                    selectedItem == "All" && "elementor-item-active"
                  }`}
                  onClick={() => setSelectedItem("All")}
                >
                  All
                </li>
                <li
                  className={`font-medium sm:px-[14px] pr-[12px] py-[7px] text-white relative ${
                    selectedItem == "CapturedMemories" &&
                    "elementor-item-active"
                  }`}
                  onClick={() => setSelectedItem("CapturedMemories")}
                >
                  Captured Memories
                </li>
                <li
                  className={`font-medium sm:px-[14px] pr-[12px] py-[7px] text-white relative ${
                    selectedItem == "UnforgettableMoments" &&
                    "elementor-item-active"
                  }`}
                  onClick={() => setSelectedItem("UnforgettableMoments")}
                >
                  Unforgettable Moments
                </li>
              </ul>

              {(selectedItem == "All" ||
                selectedItem == "CapturedMemories") && (
                <>
                  <Gallery
                    images={GalleryImg}
                    paddingBottom="186.523%"
                    columngapcount="4"
                    openLightbox={openLightbox}
                  />
                  <Lightbox
                    isOpen={isOpen}
                    imageIndex={imageIndex}
                    onClose={closeLightbox}
                    images={GalleryImg}
                  />
                </>
              )}

              {selectedItem == "UnforgettableMoments" && (
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
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[url('/assets/templete/2/bg-08.jpg')] bg-no-repeat relative "
        style={{
          backgroundPosition: "center center",
          backgroundSize: "1000px auto",
        }}
      >
        <div
          className="bg-[url('/assets/templete/2/bg-09.jpg')] bg-no-repeat h-full w-full left-0 top-0 absolute z-[-10]"
          style={{
            backgroundPosition: "top right",
            backgroundSize: "100px auto",
          }}
        ></div>
        <div className="sm:flex">
          <div className="lg:w-[30%] sm:w-1/4 sm:block hidden relative">
            <div className="mt-[-35px]">
              <Image
                src="/assets/templete/2/gallery-16.jpg"
                alt=""
                width={200}
                height={200}
                className="rounded-full rounded-t-none float-right"
              />
            </div>
            <div className="absolute lg:bottom-[190px] bottom-[290px] lg:left-[50px]">
              <Image
                src="/assets/templete/2/gallery-18.jpg"
                alt=""
                width={100}
                height={100}
                className=""
              />
            </div>
            <div className="absolute bottom-[0px] lg:left-[50px]">
              <Image
                src="/assets/templete/2/gallery-14.jpg"
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
                  className="text-[50px] font-normal text-black mb-5"
                  style={{ textShadow: "2px 2px 0px #FFFFFF" }}
                >
                  Itinerary
                </h1>
              </div>
              {templateData?.itinerary?.map((steps, index) => (
                <div key={steps.id} className={``}>
                  <Steps
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
            <div className="mt-[50px]">
              <Image
                alt=""
                src="/assets/templete/2/gallery-20.jpg"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[120px] right-[0px]">
              <Image
                alt=""
                src="/assets/templete/2/gallery-17.jpg"
                width={300}
                height={400}
                className=""
              />
            </div>
            <div className="absolute bottom-[0px] right-[200px]">
              <Image
                alt=""
                src="/assets/templete/2/gallery-21.jpg"
                width={100}
                height={100}
                className="rounded-full rounded-b-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[url('/assets/templete/2/bg-07.png')] bg-no-repeat bg-[#80A0C2] relative"
        style={{ backgroundPosition: "top left", backgroundSize: "150px auto" }}
      >
        <div className="bg-[url('/assets/templete/2/bg-01.jpg')] h-full w-full top-0 left-0 absolute mix-blend-multiply opacity-50"></div>
        <div className="container mx-auto max-w-[1350px] relative">
          <div className="py-[220px] lg:flex">
            <div className="w-[20%]"></div>
            <div className="lg:w-[60%] w-full px-3 lg:px-0 text-center">
              <h6 className="text-[14px] font-normal mb-5 tracking-[1px]">
                Forever in Our Hearts
              </h6>
              <h1
                className="sm:text-[100px] text-[30px] font-normal text-white mb-5"
                style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.15)" }}
              >
                Let's Celebrate True Love
              </h1>
              <ContactForm />
            </div>
            <div className="w-[20%"></div>
          </div>
        </div>
      </div>
      <div
        className="bg-[url('/assets/templete/2/bg-10.jpg')] bg-no-repeat relative pt-[100px] lg:pb-[120px]"
        style={{ backgroundPosition: "top left", backgroundSize: "393px auto" }}
      >
        <div
          className="bg-[url('/assets/templete/2/bg-11.jpg')] h-full w-full left-0 top-0 absolute bg-no-repeat opacity-100"
          style={{
            backgroundPosition: "top right",
            backgroundSize: "600px auto",
          }}
        ></div>
        <div className="container mx-auto max-w-[1350px] relative">
          <div className="text-center">
            <h1 className="sm:text-[50px] text-[30px] font-normal text-black mb-5">
              Important Family Members
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-[70px]">
            {templateData?.familyMembers?.map((card, index) => (
              <FamilyCard
                key={card.id}
                imgSrc="/assets/templete/2/gallery-02.jpg"
                name={card.name}
                relationship={card.relation}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="bg-[url('/assets/templete/2/bg-12.jpg')] bg-no-repeat relative pt-[120px] pb-[120px]"
        style={{
          backgroundPosition: "bottom center",
          backgroundSize: "1000px auto",
        }}
      >
        <div className="container mx-auto max-w-[1350px] relative">
          <div className="sm:flex">
            <div className="sm:w-[30%]"></div>
            <div className="sm:w-[40%] text-center">
              <div>
                <h2 className="lg:text-[50px] text-[35px] text-black font-normal">
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
                imgSrc="/assets/templete/2/gallery-02.jpg"
                name={card.firstName}
                relationship={card.relationship}
                contactNo={`+91 ${card.contactNumber}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
