import CoupleInfo from "@/Components/template components/template1Components/coupleInfoBox";
import Double from "@/Components/template components/template1Components/double";
import GreenStrip from "@/Components/template components/template1Components/greenStrip";
import Lightbox from "@/Components/template components/template1Components/lightBox";
import ContactForm from "@/Components/template components/template1Components/rsvpForm";
import Steps from "@/Components/template components/template1Components/steps";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import GreenStrip from "../../../components/template1Components/greenStrip";
// import CoupleInfo from "../../../components/template1Components/coupleInfoBox";
// import Steps from "../../../components/template1Components/steps";
// import Lightbox from "../../../components/template1Components/lightBox";
// import Double from "../../../components/template1Components/double";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { COLORS } from "@/Components/Utils/ConstantTheme";
// import ContactForm from "../../../components/template1Components/rsvpForm";

function Template1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewImg, setViewImg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const openLightbox = (img) => {
    setIsOpen(true);
    setViewImg(img);
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
    { id: 1, image: "/images/gallery/c-gallery-02.jpg" },
    { id: 1, image: "/images/gallery/c-gallery-03.jpg" },
    { id: 1, image: "/images/gallery/c-gallery-04.jpg" },
    { id: 1, image: "/images/gallery/c-gallery-07.jpg" },
    { id: 1, image: "/images/gallery/c-gallery-08.jpg" },
    { id: 1, image: "/images/gallery/c-gallery-09.jpg" },
    { id: 1, image: "/images/gallery/c-gallery-10.jpg" },
  ];

  const stepss = [
    {
      id: 1,
      stp: "1",
      functionName: " Wedding Ceremony ",
      functionInfo:
        " The wedding ceremony is the heart of any celebration. It's the moment when the couple exchange vows and commit to spending the rest of their lives together.",
    },
    {
      id: 2,
      stp: "2",
      functionName: " Lunch Time ",
      functionInfo:
        " After the wedding ceremony, it's time for lunch! This is a time for guests to relax and enjoy a delicious meal together, while catching up with old friends and making new ones.",
    },
    {
      id: 3,
      stp: "3",
      functionName: " Party with Music ",
      functionInfo:
        " The party with music is the perfect way to celebrate the newlyweds and their love story. This is a time for guests to let loose, hit the dance floor, and enjoy some great music.",
    },
    {
      id: 4,
      stp: "4",
      functionName: " Cake Cutting ",
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

  const handleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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

  return (
    <div className="lg:min-w-[1280px] ">
      {openModal && (
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh]
         max-h-full bg-[#00000060] flex justify-center items-center"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Heading
                </h3>
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Our team will get in touch with you shortly.
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={handleCloseModal}
                  data-modal-hide="defaultModal"
                  type="button"
                  className={`text-white bg-[${COLORS.primary}] focus:ring-4 focus:outline-none  
                font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
                >
                  Okay
                </button>
                {/* <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="h-[900px] relative">
        <div className={`fixed bg-[${COLORS.primary}] top-0 w-full z-[10] p-4`}>
          <button
            onClick={handleModal}
            className={`float-right mr-8 py-2 px-3 rounded-[7px] font-semibold text-white text-center`}
            style={{ background: COLORS.pinkColor }}
          >
            BUY NOW
          </button>
        </div>
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white  w-max ">
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
      />

      <div
        className={`lg:p-24 py-28 p-4 lg:flex justify-between  `}
        style={{ backgroundImage: "url('/images/c-paral-02.jpg')" }}
      >
        <CoupleInfo
          bgImage="/images/bg-watercolor-02.jpg"
          name="Thomas Mcnroo"
          gender="THE GROOM"
          infotext1="My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude for the love and support that we've received from our family and friends."
          infotext2=" On this special day, I want to express my gratitude to my partner - my rock, my confidant, my love. Christin, you bring out the best in me, and I'm honored to call you my partner for life. I promise to love you always."
        />

        <CoupleInfo
          bgImage="/images/bg-watercolor.jpg"
          name="Christin Martin"
          gender="THE BRIDE"
          infotext1="Hello everyone, my name is Christin, and I'm overjoyed to share this special moment with all of you. I've always been a hopeless romantic, and I've dreamt of this day for as long as I can remember."
          infotext2=" Today, I feel like I'm living in a fairytale - marrying the love of my life and surrounded by all of our family and friends. Every detail of this wedding has been a labor of love, as the carefully selected flowers."
        />
      </div>

      <Double
        img="/images/double1.jpg"
        title="Official Ceremony"
        subtitle="11:30 am In The Square"
        infotext="Welcome to this beautiful park, where we gather to celebrate our wedding. As we look around us, we can't help but be struck by the natural beauty that surrounds us. From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion. As we stand here today, surrounded by the beauty of this park, we are reminded of the enduring power of love."
        imgPostion="left"
        hoverTitle="St Paul Park"
        hoverText="Today, we celebrate the love and commitment of this wonderful couple."
      />

      <Double
        img="/images/double2.jpg"
        title="Lunch at the Villa"
        subtitle="13:30 pm In The Garden"
        infotext="The villa's garden is truly a work of art, with carefully cultivated flower beds and winding paths that invite us to explore the natural beauty around us. The gentle breeze that brushes against our skin and the chirping of the birds add to the enchanting ambiance that surrounds us. It's the perfect setting for a wedding reception, as it allows us to enjoy delicious food and drinks while basking in the splendor of the best flowery nature."
        imgPostion=""
        hoverTitle="Madison Villas"
        hoverText="We wanted to take a moment to thank you a lot for joining us."
      />

      <div>
        <p className="!font-Alex !text-[40px] lg:text-[100px] text-center mt-16">
          Organization
        </p>
        <p className="text-center mt-1 mb-10">WEDDING</p>
        <div className="grid lg:grid-cols-2  lg:px-20 py-14">
          <div className="px-8">
            <img src="/images/double2.jpg" alt="" className="" />
            <p className="!font-Alex !text-[50px] text-center mt-5">
              Wedding Menu
            </p>
            <p className=" text-center lg:px-14 ">
              We are proud to present a menu that reflects our love for both
              classic and contemporary cuisine. Our chef has artfully combined
              traditional recipes with innovative techniques, resulting in a
              dining experience.
            </p>
          </div>
          <div className="px-8 mt-16 lg:mt-auto">
            {stepss.map((steps, index) => (
              <div key={index} className={``}>
                <Steps
                  step={steps.stp}
                  fctnName={steps.functionName}
                  fctnInfo={steps.functionInfo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 cursor-pointer">
          {images.map((image, index) => (
            <div
              key={index}
              className={``}
              onClick={() => openLightbox(image.image)}
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

      <Lightbox isOpen={isOpen} imageUrl={viewImg} onClose={closeLightbox} />

      <div style={{ backgroundImage: "url('/images/bg-watercolor-02.jpg')" }}>
        <p className="!font-Alex !text-[40px] lg:!text-[100px] text-center mt-16 lg:mt-0 pt-16 ">
          Best Friends
        </p>
        <p className="text-center mt-1 mb-10">THANKS FOR BEING THERE</p>
        <div className="grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-none lg:px-20 py-14">
          <div className="px-8">
            <div className="relative">
              <div className="absolute hover:bg-[#0000005E] opacity-0 hover:!opacity-100 w-[100%] h-[100%] !font-Alex  flex justify-center items-center">
                <p className="!text-5xl  !font-Alex text-white">Girls</p>{" "}
              </div>
              <img src="/images/bestfriendsgirls.jpg" alt="" className="" />
            </div>
            <div className="lg:flex justify-between cursor-pointer lg:px-32 mt-11 mb-7">
              <p>ROSE</p>
              <p>MARY</p>
              <p>LIZZY</p>
              <p>HANNA</p>
            </div>
            <p className=" lg:text-center lg:px-14">
              We are proud to present a menu that reflects our love for both
              classic and contemporary cuisine. Our chef has artfully combined
              traditional recipes with innovative techniques, resulting in a
              dining experience.
            </p>
          </div>
          <div className="px-8">
            <div className="relative">
              <div className="absolute hover:bg-[#0000005E] opacity-0 hover:!opacity-100 w-[100%] h-[100%] !font-Alex  flex justify-center items-center">
                <p className="!text-5xl  !font-Alex text-white">Guys</p>{" "}
              </div>
              <img src="/images/bestfriendsguys.jpg" alt="" className="" />
            </div>
            <div className="lg:flex justify-between cursor-pointer lg:px-32 mt-11 mb-7">
              <p>JACK</p>
              <p>MARTIN</p>
              <p>ANDREW</p>
              <p>THOM</p>
            </div>
            <p className=" lg:text-center lg:!px-14">
              We are proud to present a menu that reflects our love for both
              classic and contemporary cuisine. Our chef has artfully combined
              traditional recipes with innovative techniques, resulting in a
              dining experience.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#9CAB8D] text-white relative">
        <div
          className="absolute top-0 left-0  opacity-100 mix-blend-multiply  w-[100%] h-[100%] bg-cover bg-no-repeat bg-[center_top]"
          style={{ backgroundImage: "url('/images/bg-watercolor.jpg')" }}
        ></div>
        <div className="lg:px-36 px-4">
          <Slide autoplay={true}>
            {slides2.map((slide, index) => (
              <div
                key={index}
                className="each-slide-effect mx-auto text-center "
              >
                <div className="py-20 text-center">
                  <p className="lg:px-[320px] px-8 mb-10">{slide.textinfo}</p>
                  <img
                    src={slide.image}
                    alt=""
                    className="rounded-full w-16 h-16 m-auto mb-5"
                  />
                  <span className="!font-Alex !ext-[20px]">
                    {slide.avatarName}
                  </span>
                  <p>Bridesmaid</p>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>

      <Double
        img="/images/afterparty1.jpg"
        title="The After Party"
        subtitle="13:30 pm In The Garden"
        infotext="Get ready to keep the celebration going! The after party for the wedding will be held at the stunning rooftop bar, Sky Lounge, starting at 9 PM. The location is just a short walk from the reception venue, so you won't have to worry about transportation. 
      The Sky Lounge offers amazing views of the city skyline, along with a fully stocked bar and DJ playing all of your favorite hits. This will be the perfect spot to dance the night away and toast to the newlyweds. The party will go on until the early hours of the morning, so be sure to pace yourself!"
        imgPostion="left"
        bgColor="white"
      />

      <GreenStrip
        title="Our Vendors"
        text="THANK YOU"
        img="/images/couple-line.png"
        propName="venders"
      />

      <div
        className=" lg:py-[32rem] py-[450px] relative bg-cover "
        style={{ backgroundImage: "url('/images/c-paral-03.jpg')" }}
      >
        <div className="absolute top-0 left-0  opacity-50  w-[100%] h-[100%] bg-black "></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[650px] mx-auto px-28 lg:px-auto py-28 bg-cover z-50"
          style={{ backgroundImage: "url('/images/bg-watercolor-02.jpg')" }}
        >
          <p>R.S.V.P</p>
          <p className="!font-Alex !text-[30px] lg:!text-[50px] lg:px-28 mb-12">
            Confirmation at Marriage
          </p>
          <ContactForm />
        </div>
      </div>

      <div
        className="py-28  bg-[length:731px_auto] bg-right-bottom bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/bg-watercolor-03.jpg')" }}
      >
        <div
          className="absolute top-0 left-0  opacity-100  w-[100%] h-[100%] bg-[length:309px_auto] bg-no-repeat"
          style={{ backgroundImage: "url('/images/gr-leaf-10.png')" }}
        ></div>

        <p className="!font-Alex lg:!text-[100px] !text-[50px] text-center">
          Our Blog
        </p>
        <p className="!font-Cardo text-center mb-14">WEDDING NEWS</p>
        <div className="grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-none gap-y-8 lg:gap-y-0 lg:gap-x-8 lg:mx-20 mx-4">
          <div
            className="bg-cover lg:p-10 p-6"
            style={{ backgroundImage: "url('/images/post-06.jpg')" }}
          >
            <div
              className="text-center text-black bg-cover py-12 lg:px-16 px-8"
              style={{ backgroundImage: "url('/images/bg-watercolor-03.jpg')" }}
            >
              <p className="mb-3">February 8, 2023</p>
              <p className="!text-[25px] mb-6">We Love Passion</p>
              <p className="mb-4">
                Every detail of the wedding is infused with love, custom
                invitations, first dance...
              </p>
              <p>CLICK HERE</p>
            </div>
          </div>
          <div
            className="bg-cover lg:p-10 p-6"
            style={{ backgroundImage: "url('/images/post-04.jpg')" }}
          >
            <div
              className="text-center text-black bg-cover py-12 lg:px-16 px-8"
              style={{ backgroundImage: "url('/images/bg-watercolor-03.jpg')" }}
            >
              <p className="mb-3">February 8, 2023</p>
              <p className="!text-[25px] mb-6">Flower Design</p>
              <p className="mb-4">
                When it comes to planning the perfect wedding, flowers make all
                the difference.
              </p>
              <p>CLICK HERE</p>
            </div>
          </div>
          <div
            className="bg-cover lg:p-10 p-6"
            style={{ backgroundImage: "url('/images/post-05.jpg')" }}
          >
            <div
              className="text-center text-black bg-cover py-12 lg:px-16 px-8"
              style={{ backgroundImage: "url('/images/bg-watercolor-03.jpg')" }}
            >
              <p className="mb-3">February 8, 2023</p>
              <p className="!text-[25px] mb-6">Special Events</p>
              <p className="mb-4">
                Sneak a peek - Get an exclusive preview of our upcoming wedding
                event.
              </p>
              <p>CLICK HERE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9CAB8D] p-10 relative">
        <div
          className="absolute bg-[center_top] w-full h-full bg-no-repeat bg-cover opacity-100 mix-blend-multiply top-0 left-0"
          style={{ backgroundImage: "url('/images/bg-watercolor-02.jpg')" }}
        ></div>
        <div className="grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-none text-center lg:text-left ">
          <div className=" text-white lg:flex items-center lg:pl-10 mb-[40px] lg:mb-auto">
            <img
              src="/images/icon-01.png"
              alt="glasses"
              className="w-24 h-20 mr-3 mb-6 hidden lg:block"
            />
            <div>
              <p>CITY</p>
              <p className=" text-[25px]">New York</p>
            </div>
          </div>
          <div className=" text-white lg:flex items-center lg:pl-10 mb-[40px] lg:mb-auto">
            <img
              src="/images/icon-02.png"
              alt="glasses"
              className="w-24 h-20 mr-3 mb-6 hidden lg:block"
            />
            <div>
              <p>PHONE</p>
              <p className=" !text-[25px]">+1 203 903 559</p>
            </div>
          </div>
          <div className=" text-white lg:flex items-center lg:pl-10 mb-[40px] lg:mb-auto">
            <img
              src="/images/icon-03.png"
              alt="glasses"
              className="w-24 h-20 mr-3 mb-6 hidden lg:block"
            />
            <div>
              <p>ADDRESS</p>
              <p className=" !text-[25px]">336 W 46th St</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center py-20 lg:py-14  bg-right-top bg-no-repeat bg-contain relative"
        style={{ backgroundImage: "url('/images/bg-watercolor-02.jpg')" }}
      >
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50  lg:w-[240px] lg:h-[260px] bg-[length:235px_auto] bg-no-repeat"
          style={{ backgroundImage: "url('/images/gr-leaf-03.png')" }}
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
