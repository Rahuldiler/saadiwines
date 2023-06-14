import {Inter} from "next/font/google";
import HeroSection from "@/components/home/HeroSection";
import WebsiteDesigningSection from "@/components/home/WebsiteDesigningSection";
import VideoInvitation from "@/components/home/VideoInvitation";
import GuestList from "@/components/home/GuestList";
import ContactUs from "@/components/home/ContactUs";
import Budget from "@/components/home/Budget";
import Feedbacks from "@/components/home/Feedbacks";
import About from "@/components/home/About";
import Footer from "@/components/common/Footer";
import BottomBar from "@/components/common/BottomBar";
import Header from "@/components/common/Header";
import {useState} from "react";
import LoginModal from "@/Components/common/LoginModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [handle, setHandle] = useState(true);

  const navItems = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "#about" },
    { title: "Our Services", url: "#services" },
    { title: "Reviews", url: "#reviews" },
    { title: "Contact Us", url: "#contact" },
  ];

  return (
    <>
      <main>
        {/* <TopBar /> */}
        <Header
          handleOpen={handleOpen}
          setHandle={setHandle}
          navItems={navItems}
          isHome={true}
        />
        <HeroSection />
        {/* <ServicesSection /> */}
        <About />
        <WebsiteDesigningSection />
        <VideoInvitation />
        <Budget />
        <GuestList />
        <Feedbacks />
        <ContactUs />
        <Footer />
        <BottomBar />
        <LoginModal
          open={open}
          handle={handle}
          handleClose={handleClose}
          setHandle={setHandle}
        />
      </main>
    </>
  );
}
