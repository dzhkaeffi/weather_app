// Display the forecast for the next 5 days

import { useSelector } from "react-redux";
import "../styles/forecast.css";

function Forecast() {
  const forecast = useSelector((state) => state.forecast);
  if (forecast === 400) {
    return (
      <div className="forecast">
        <div className="forecast__weather">
          <span className="weather__city">Error</span>
          <div className="weather__info">
            <span className="weather__temperature">
              Please enter a valid location
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex py-12 gap-24 text-center flex-col md:flex-row">
      {forecast &&
        forecast.forecast.forecastday.map((day, idx) => {
          const date = new Date(day.date).toLocaleString("et-ee", {
            weekday: "short",
            day: "numeric",
            month: "long",
          });
          return (
            <div
              key={(day, idx)}
              className="forecast__day drop-shadow pt-4 w-[200px] text-primary items-center h-full text-lg bg-secondary rounded-xl"
            >
              <div className="forecast__date text-accent font-semibold text-xl">
                {date}
              </div>
              <div className="forecast__max text-red-400 ">
                <i className="uil uil-temperature"></i>
                {Math.round(day.day.maxtemp_c)}°C
              </div>
              <div className="forecast__min text-blue-400 ">
                <i className="uil uil-temperature-empty"></i>
                {Math.round(day.day.mintemp_c)}°C
              </div>
              <div className="forecast__will-it-rain text-secondary">
                <i className="uil uil-cloud-showers-heavy"></i>{" "}
                {day.day.daily_chance_of_rain}%
              </div>
              <div className="forecast__condition text-primary flex justify-center">
                <img className="w-8" src={day.day.condition.icon} alt="" />
              </div>
              <br />
            </div>
          );
        })}
    </div>
  );
}

export default Forecast;
