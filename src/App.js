import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import HeroSection from "./Components/Home/HeroSection";
import ServicesSection from "./Components/Home/ServicesSection";
import TopBar from "./Components/Common/TopBar";
import WebsiteDesigningSection from "./Components/Home/WebsiteDesigningSection";
import VideoInvitation from "./Components/Home/VideoInvitation";
import GuestList from "./Components/Home/GuestList";
import BottomBar from "./Components/Common/BottomBar";
import ContactUs from "./Components/Home/ContactUs";

function App() {
  return (
    <main>
      <TopBar />
      <Header />
      <HeroSection />
      <ServicesSection />
      <WebsiteDesigningSection />
      <VideoInvitation />
      <GuestList />
      <ContactUs />
      <Footer />
      <BottomBar />
    </main>
  );
}

export default App;
