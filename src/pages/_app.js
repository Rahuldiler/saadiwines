import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";

import { AppProvider } from "@/context/AppContext";
import { theme } from "@/Components/utils/theme";
import Loader from "@/Components/common/Loader";
import Notification from "@/Components/common/Notification";
import useLoadingStore from "@/store/loadingStore";
import "@/styles/globals.css";
import useNotificationStore from "@/store/notificationStore";

export default function App({ Component, pageProps }) {
  const loadingFn = useLoadingStore((state) => state.loadingFn);

  useEffect(() => {
    loadingFn(false, "Loading...");
  }, []);
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Loader />
          <Notification />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </>
  );
}
