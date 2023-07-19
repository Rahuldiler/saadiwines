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
  const { loading } = useLoadingStore((state) => ({
    loading: state.loading,
  }));
  const { notificationDetails } = useNotificationStore((state) => ({
    notificationDetails: state.notificationDetails,
  }));
  const loadingFn = useLoadingStore((state) => state.loadingFn);

  useEffect(() => {
    loadingFn(false);
  }, []);
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={theme}>
          {loading && (
            <Loader message="Loading dashboard page" isLoading={loading} />
          )}
          <Notification
            type={notificationDetails?.type}
            message={notificationDetails?.message}
            open={notificationDetails?.open}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </>
  );
}
