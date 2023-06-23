import "./App.css";
import { HydrationProvider, Client } from "react-hydration-provider";
import Template1 from "./pages/template/1/1";
import { AppProvider } from "./context/AppContext";

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
