import {Inter} from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        {/* <TopBar /> */}
        <Header />
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
      </main>
    </>
  );
}
