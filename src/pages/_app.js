import { theme } from "@/Components/utils/theme";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { HydrationProvider, Client } from "react-hydration-provider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HydrationProvider>
        <Client>
          <AppProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </AppProvider>
        </Client>
      </HydrationProvider>
    </>
  );
}
