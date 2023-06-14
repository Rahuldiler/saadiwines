import { Inter } from "next/font/google";
import HeroSection from "@/Components/home/HeroSection";
import WebsiteDesigningSection from "@/Components/home/WebsiteDesigningSection";
import VideoInvitation from "@/Components/home/VideoInvitation";
import GuestList from "@/Components/home/GuestList";
import ContactUs from "@/Components/home/ContactUs";
import Budget from "@/Components/home/Budget";
import Feedbacks from "@/Components/home/Feedbacks";
import About from "@/Components/home/About";
import Footer from "@/Components/common/Footer";
import BottomBar from "@/Components/common/BottomBar";
import Header from "@/Components/common/Header";
import { useState } from "react";
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
