import "./App.css";
import { HydrationProvider, Client } from "react-hydration-provider";
import Template1 from "./pages/template/1/1";
import { AppProvider } from "./context/AppContext";
import { useNotificationStore } from "./store/notificationStore";
import Loader from "./Components/common/Loader";
import { useEffect } from "react";

function App() {
  return (
    <HydrationProvider>
      <Client>
        <AppProvider>
          <div className="App">
            <Template1 />
          </div>
        </AppProvider>
      </Client>
    </HydrationProvider>
  );
}

export default App;
