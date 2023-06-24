import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import moment from "moment";
import GreenStrip from "@/Components/template-components/1/greenStrip";
import CoupleInfo from "@/Components/template-components/1/coupleInfoBox";
import Double from "@/Components/template-components/1/double";
import ContactForm from "@/Components/template-components/1/rsvpForm";
import Lightbox from "@/Components/template-components/1/lightBox";
import Cards from "@/Components/template-components/1/Cards";
import { useEffect } from "react";
import { templateInfoData } from "@/constants/templateInfo";
import Steps from "@/Components/template-components/1/steps";
import { useRouter } from "next/router";
import TemplateOne from "@/Components/all-templates/TemplateOne";
import { staticTemplateData } from "@/constants/template";

function Template1({ formData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageIndex, setImageIndex] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [themeColor, setThemeColor] = useState({
    bgColor: "9CAB8D",
    textColor: "#000",
    textBgColor: "#fff",
  });

  // useEffect(() => {
  //   if (router?.query?.color !== undefined) {
  //     setThemeColor(`#${router?.query?.color}`);
  //   }
  // }, [router.query]);

  const openLightbox = (img) => {
    setIsOpen(true);
    setImageIndex(img);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const slides = [
    {
      id: 1,
      image: "/images/c-paral-14.jpg",
      caption1: " Christin & Thomas ",
      caption2: " 16/04/2030",
    },
    {
      id: 2,
      image: "/images/package-lock.jpeg",
      caption1: " Christin & Thomas ",
      caption2: " 16/04/2030",
    },
  ];

  const images = [
    { id: 1, image: "/images/gallery/c-gallery-01.jpg" },
    { id: 2, image: "/images/gallery/c-gallery-02.jpg" },
    { id: 3, image: "/images/gallery/c-gallery-03.jpg" },
    { id: 4, image: "/images/gallery/c-gallery-04.jpg" },
    { id: 5, image: "/images/gallery/c-gallery-07.jpg" },
    { id: 6, image: "/images/gallery/c-gallery-08.jpg" },
    { id: 7, image: "/images/gallery/c-gallery-09.jpg" },
    { id: 8, image: "/images/gallery/c-gallery-10.jpg" },
  ];

  const impoFamily = [
    {
      id: 1,
      image: "/images/gallery/c-gallery-01.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 2,
      image: "/images/gallery/c-gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 3,
      image: "/images/gallery/c-gallery-03.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 4,
      image: "/images/gallery/c-gallery-04.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 5,
      image: "/images/gallery/c-gallery-07.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 6,
      image: "/images/gallery/c-gallery-08.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 7,
      image: "/images/gallery/c-gallery-09.jpg",
      name: "rajat",
      relationship: "brother",
    },
    {
      id: 8,
      image: "/images/gallery/c-gallery-10.jpg",
      name: "rajat",
      relationship: "brother",
    },
  ];

  const contant = [
    {
      id: 1,
      image: "/images/gallery/c-gallery-01.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 2,
      image: "/images/gallery/c-gallery-02.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
    },
    {
      id: 3,
      image: "/images/gallery/c-gallery-03.jpg",
      name: "rajat",
      relationship: "brother",
      contactNo: "+9190909090",
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

  const slides2 = [
    {
      id: 1,
      image: "/images/avatar-01.jpg",
      textinfo:
        "As I look back on our friendship, I can't help but remember all of the fun times we've had together, from the crazy adventures to the quiet moments of reflection.",
      avatarName: " Hanna Stuart",
    },
    {
      id: 1,
      image: "/images/avatar-02.jpg",
      textinfo:
        "You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.",
      avatarName: " Rode Depoins",
    },
  ];

  const [rsvp, setRsvp] = useState(true);

  const [templateData, setTemplateData] = useState();

  useEffect(() => {
    formData ? setTemplateData(formData) : setTemplateData(templateInfoData);
  }, [formData]);

  return (
    <TemplateOne
      formData={formData}
      staticTemplateData={staticTemplateData[0]}
      themeColor={staticTemplateData[0].theme}
    />
  );
}

export default Template1;
