import { Inter } from "next/font/google";
import HeroSection from "@/Components/Home/HeroSection";
import ServicesSection from "@/Components/Home/ServicesSection";
import WebsiteDesigningSection from "@/Components/Home/WebsiteDesigningSection";
import VideoInvitation from "@/Components/Home/VideoInvitation";
import GuestList from "@/Components/Home/GuestList";
import ContactUs from "@/Components/Home/ContactUs";
import Budget from "@/Components/Home/Budget";
import Feedbacks from "@/Components/Home/Feedbacks";
import About from "@/Components/Home/About";
import Footer from "@/Components/Common/Footer";
import BottomBar from "@/Components/Common/BottomBar";
import TopBar from "@/Components/Common/TopBar";
import Header from "@/Components/Common/Header";
import { useState } from "react";
import { Box, Dialog, Modal } from "@mui/material";
import Login from "../Components/my-account/Login";
import SignUp from "@/Components/my-account/Sign-up";
import LoginModal from "@/Components/Common/LoginModal";

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
