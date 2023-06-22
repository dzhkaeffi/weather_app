// Display forecast for current day

import { useSelector } from "react-redux";
import "../styles/weather.css";

function Weather() {
  const forecast = useSelector((state) => state.forecast);
  if (forecast == 400) {
    return <></>;
  }
  return (
    <div className="forecast">
      {forecast && (
        <div className="forecast__weather text-primary text-center">
          <span className="weather__city text-xl font-semibold text-accent">
            {forecast.location.name}
          </span>
          <div className="weather__info text-lg">
            <span className="weather__temperature dark:text-yellow-200 text-yellow-800">
              <i className="uil uil-temperature-half"></i>
              {Math.round(forecast.current.temp_c)}°C
            </span>
            <div className="weather__feelslike text-purple-800 dark:text-purple-400">
              <i className="uil uil-eye"></i>{" "}
              {Math.round(forecast.current.feelslike_c)}°C
            </div>
            <div className="weather__will-it-rain">
              <i className="uil uil-cloud-showers-heavy"></i>{" "}
              {forecast.forecast.forecastday[0].day.daily_chance_of_rain}%
            </div>
            <div className="weather__description flex justify-center">
              <img
                className="w-8"
                src={forecast.current.condition.icon}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Weather;
