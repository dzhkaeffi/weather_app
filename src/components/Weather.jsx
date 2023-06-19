// Display forecast for current day

import { useSelector } from "react-redux";
import "../styles/weather.css";

function Weather() {
  const forecast = useSelector((state) => state.forecast);
  return (
    <div className="forecast">
      {forecast && (
        <div className="forecast__weather">
          <span className="weather__city">{forecast.location.name}</span>
          <div className="weather__info">
            <span className="weather__temperature">
              {Math.round(forecast.current.temp_c)}°C.
            </span>
            <div className="weather__description">
              {forecast.current.condition.text}
            </div>
            <div className="weather__feelslike">
              Feels like {Math.round(forecast.current.feelslike_c)}°C
            </div>
            <div className="weather__will-it-rain">
              {forecast.forecast.forecastday[0].day.daily_chance_of_rain}%
              chance of rain
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Weather;
