import React, {useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import {Slide} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import moment from "moment";
import GreenStrip from "@/Components/template-components/1/greenStrip";
import CoupleInfo from "@/Components/template-components/1/coupleInfoBox";
import Double from "@/Components/template-components/1/double";
import ContactForm from "@/Components/template-components/1/rsvpForm";
import Lightbox from "@/Components/template-components/1/lightBox";

function Template1({formData}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageIndex, setImageIndex] = useState();
    const [isOpen, setIsOpen] = useState(false);

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
        {id: 1, image: "/images/gallery/c-gallery-01.jpg"},
        {id: 2, image: "/images/gallery/c-gallery-02.jpg"},
        {id: 3, image: "/images/gallery/c-gallery-03.jpg"},
        {id: 4, image: "/images/gallery/c-gallery-04.jpg"},
        {id: 5, image: "/images/gallery/c-gallery-07.jpg"},
        {id: 6, image: "/images/gallery/c-gallery-08.jpg"},
        {id: 7, image: "/images/gallery/c-gallery-09.jpg"},
        {id: 8, image: "/images/gallery/c-gallery-10.jpg"},
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

    return (
        <div className="lg:min-w-[1280px] ">
            <div className="h-[900px] relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 bg-black left-0 w-full h-full transition-opacity duration-500 ${
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
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white  w-max ">
                            <div
                                className={`!font-Alex text-center text-[50px] w-56 lg:w-auto lg:text-[120px] ${
                                    currentSlide ? "text-[120px]" : ""
                                } transition-all duration-500`}
                            >
                                {slide.caption1}
                            </div>
                            <div className="text-center text-[30px] tracking-wider">
                                {" "}
                                {slide.caption2}
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
                        <ChevronLeftIcon className="w-8"/>{" "}
                    </button>
                    <button
                        className="px-4 py-2 text-white  absolute top-1/2 right-0 transform -translate-x-0 -translate-y-1/2 "
                        onClick={nextSlide}
                    >
                        {" "}
                        <ChevronRightIcon className="w-8"/>{" "}
                    </button>
                </div>
            </div>

            <GreenStrip
                title="Our Wedding"
                text="MISSING DAYS TO"
                img="/images/icon-02.png"
                propName="clock"
            />

            {formData && (
                <div
                    className={`lg:p-24 py-28 p-4 lg:flex justify-between  `}
                    style={{backgroundImage: "url('/images/c-paral-02.jpg')"}}
                >
                    <CoupleInfo
                        bgImage="/images/bg-watercolor-02.jpg"
                        name={formData && formData?.website[0]?.groom}
                        gender="THE GROOM"
                        father="X"
                        mother="Y"
                        grandfather="A"
                        grandmother="B"
                        infotext1="My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude for the love and support that we've received from our family and friends."
                        infotext2=" On this special day, I want to express my gratitude to my partner - my rock, my confidant, my love. Christin, you bring out the best in me, and I'm honored to call you my partner for life. I promise to love you always."
                    />

                    <CoupleInfo
                        bgImage="/images/bg-watercolor.jpg"
                        name={formData && formData?.website[0]?.bride}
                        gender="THE BRIDE"
                        father="X"
                        mother="Y"
                        grandfather="A"
                        grandmother="B"
                        infotext1="Hello everyone, my name is Christin, and I'm overjoyed to share this special moment with all of you. I've always been a hopeless romantic, and I've dreamt of this day for as long as I can remember."
                        infotext2=" Today, I feel like I'm living in a fairytale - marrying the love of my life and surrounded by all of our family and friends. Every detail of this wedding has been a labor of love, as the carefully selected flowers."
                    />
                </div>
            )}

            {formData?.milestone?.map((milestone, index) => {
                return (
                    <Double
                        img="/images/double1.jpg"
                        title={milestone.title}
                        subtitle="11:30 am In The Square"
                        infotext={milestone.description}
                        imgPostion={index % 2 == 0 ? "left" : ""}
                        hoverTitle="St Paul Park"
                        hoverText="Today, we celebrate the love and commitment of this wonderful couple."
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
                        <img src="/images/double2.jpg" alt="" className=""/>
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
                        {formData?.itinerary?.map((steps, index) => (
                            <div key={index} className={``}>
                                <Steps
                                    step={steps.stp}
                                    fctnName={steps.functionName}
                                    location={steps.location}
                                    dateTime={moment(steps.dateTime).format("LLLL")}
                                    fctnInfo={steps.details}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-4 cursor-pointer">
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
                <div></div>
            </div>
            <Lightbox
                isOpen={isOpen}
                imageIndex={imageIndex}
                onClose={closeLightbox}
                images={images}
            />

            <div style={{backgroundImage: "url('/images/bg-watercolor-02.jpg')"}}>
                <p className="!font-Alex !text-[40px] lg:!text-[100px] text-center mt-16 lg:mt-0 pt-16 ">
                    Important Family Members
                </p>
                <div
                    className={`grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-20 py-14 `}
                >
                    {impoFamily.map((cards, index) => (
                        <Cards
                            imgSrc={cards.image}
                            name={cards.name}
                            relationship={cards.relationship}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-[#9CAB8D] text-white relative">
                <div
                    className="absolute top-0 left-0  opacity-100 mix-blend-multiply  w-[100%] h-[100%] bg-cover bg-no-repeat bg-[center_top]"
                    style={{backgroundImage: "url('/images/bg-watercolor.jpg')"}}
                />
                <div className="lg:px-36 px-4">
                    <div className="py-20 text-center">
                        {formData && (
                            <p className="lg:px-[320px] px-8 mb-10">
                                {formData?.website[0]?.thankYouMessage}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div></div>
            <div style={{backgroundImage: "url('/images/bg-watercolor-02.jpg')"}}>
                <p className="!font-Alex !text-[40px] lg:!text-[100px] text-center mt-16 lg:mt-0 pt-16 ">
                    Points of contacts
                </p>
                <div
                    className={`grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-20 py-14 `}
                >
                    {formData?.pocs?.map((cards, index) => (
                        <Cards
                            imgSrc={contant[index].image}
                            name={cards.firstName}
                            relationship={cards.relationship}
                            contactNo={`+91 ${cards.contactNumber}`}
                        />
                    ))}
                </div>
            </div>

            {rsvp && (
                <div
                    className=" lg:py-[32rem] py-[450px] relative bg-cover "
                    style={{backgroundImage: "url('/images/c-paral-03.jpg')"}}
                >
                    <div className="absolute top-0 left-0  opacity-50  w-[100%] h-[100%] bg-black "></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[650px] mx-auto px-28 lg:px-auto py-28 bg-cover z-50"
                        style={{backgroundImage: "url('/images/bg-watercolor-02.jpg')"}}
                    >
                        <p>R.S.V.P</p>
                        <p className="!font-Alex !text-[30px] lg:!text-[50px] lg:px-28 mb-12">
                            Confirmation at Marriage
                        </p>
                        <ContactForm/>
                    </div>
                </div>
            )}
            <div
                className="text-center py-20 lg:py-14  bg-right-top bg-no-repeat bg-contain relative"
                style={{backgroundImage: "url('/images/bg-watercolor-02.jpg')"}}
            >
        <span
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50  lg:w-[240px] lg:h-[260px] bg-[length:235px_auto] bg-no-repeat"
            style={{backgroundImage: "url('/images/gr-leaf-03.png')"}}
        ></span>
                <p className="!font-Alex !text-[30px] lg:!text-[50px] mb-3">
                    Christine & Thomas
                </p>
                <p className="!font-Cardo">MADE WITH LOVE IN NEW YORK</p>
            </div>
        </div>
    );
}

export default Template1;
