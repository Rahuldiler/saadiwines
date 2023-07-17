import { Inter } from "next/font/google";
import { useState } from "react";
import LoginModal from "@/Components/common/LoginModal";
import HeroSection from "@/Components/home/HeroSection";
import WebsiteDesigningSection from "@/Components/home/WebsiteDesigningSection";
import VideoInvitation from "@/Components/home/VideoInvitation";
import Budget from "@/Components/home/Budget";
import GuestList from "@/Components/home/GuestList";
import ContactUs from "@/Components/home/ContactUs";
import Header from "@/Components/common/Header";
import About from "@/Components/home/About";
import Feedbacks from "@/Components/home/Feedbacks";
import Footer from "@/Components/common/Footer";
import BottomBar from "@/Components/common/BottomBar";
import Webcast from "@/Components/home/Webcast";
import SEO from "@/Components/utils/seo";
import { WhatsappFloatingIcon } from "@/Components/common/WhatsappFloatingIcon";
import HomeForm from "@/Components/home/HomeForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [handle, setHandle] = useState(true);

  const navItems = [
    { title: "Home", url: "/", id: "1" },
    { title: "About Us", url: "#about", id: "2" },
    { title: "Our Services", url: "#services", id: "3" },
    { title: "Reviews", url: "#reviews", id: "4" },
    { title: "Contact Us", url: "#contact", id: "5" },
  ];

  return (
    <>
      <main>
        <SEO
          title="Shaadi Vines"
          description="Shaadi Vines"
          keywords="Shaadi Vines"
        />
        {/* <TopBar /> */}
        <Header
          handleOpen={handleOpen}
          setHandle={setHandle}
          navItems={navItems}
          isHome={true}
        />
        <HeroSection />
        <HomeForm />
        {/* <ServicesSection /> */}
        <About />
        <WebsiteDesigningSection />
        <VideoInvitation />
        <Budget />
        <GuestList />
        <Webcast />
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

        <WhatsappFloatingIcon />
      </main>
    </>
  );
}
