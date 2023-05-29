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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <WebsiteDesigningSection />
        <VideoInvitation />
        <Budget />
        <GuestList />
        <About />
        <Feedbacks />
        <ContactUs />
      </main>
    </>
  );
}
