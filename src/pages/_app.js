import { theme } from "@/Components/utils/theme";
import BottomBar from "@/components/common/BottomBar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TopBar from "@/components/common/TopBar";
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
