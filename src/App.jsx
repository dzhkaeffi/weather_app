import { useEffect } from "react";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import LoactionSelector from "./components/LocationSelector";
import Weather from "./components/Weather";
import eng from "./locale/eng.json";
import est from "./locale/est.json";
import rus from "./locale/rus.json";
import "./styles/App.css";
import checkStorage, { checkLocale } from "./utils/storage";

function App() {
  useEffect(() => {
    checkStorage();
    checkLocale();
    if (localStorage.getItem("locale") === "eng") {
      document.title = eng.title;
    } else if (localStorage.getItem("locale") === "est") {
      document.title = est.title;
    } else if (localStorage.getItem("locale") === "rus") {
      document.title = rus.title;
    }
  }, []);
  return (
    <div className="background w-full h-full min-h-screen bg-gray-300 flex justify-center dark:bg-secondary">
      <div className="w-full h-full min-h-screen bg-gray-100 lg:container flex flex-col items-center dark:bg-primary">
        <Header />
        <LoactionSelector lang={localStorage.locale} />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
