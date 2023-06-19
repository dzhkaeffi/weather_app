import Forecast from "./components/Forecast";
import Header from "./components/Header";
import LoactionSelector from "./components/LocationSelector";
import Weather from "./components/Weather";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <LoactionSelector />
      <Weather />
      <Forecast />
    </>
  );
}

export default App;
