import {useEffect} from "react";
import Script from 'next/script'
import {ThemeProvider} from "@mui/material";

import {AppProvider} from "@/context/AppContext";
import {theme} from "@/Components/utils/theme";
import Loader from "@/Components/common/Loader";
import Notification from "@/Components/common/Notification";
import useLoadingStore from "@/store/loadingStore";
import "@/styles/globals.css";
import * as fbq from '../lib/fpixel'
import {useRouter} from "next/router";

export default function App({ Component, pageProps }) {
  const loadingFn = useLoadingStore((state) => state.loadingFn);

  useEffect(() => {
    loadingFn(false, "Loading...");
  }, []);

  const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
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
