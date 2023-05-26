import BottomBar from "@/Components/Common/BottomBar";
import Footer from "@/Components/Common/Footer";
import Header from "@/Components/Common/Header";
import TopBar from "@/Components/Common/TopBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <BottomBar />
    </>
  );
}
