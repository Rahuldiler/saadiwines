import BottomBar from "@/Components/Common/BottomBar";
import Footer from "@/Components/Common/Footer";
import Header from "@/Components/Common/Header";
import TopBar from "@/Components/Common/TopBar";
import { theme } from "@/Components/Utils/theme";
import { getUser } from "@/services/users/user";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
