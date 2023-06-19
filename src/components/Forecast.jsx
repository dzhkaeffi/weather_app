// Display the forecast for the next 5 days

import { useSelector } from "react-redux";
import "../styles/forecast.css";

function Forecast() {
  const forecast = useSelector((state) => state.forecast);
  return (
    <div>
      {forecast &&
        forecast.forecast.forecastday.map((day) => {
          const date = new Date(day.date).toLocaleString("et-ee", {
            weekday: "short",
            day: "numeric",
            month: "long",
          });
          return (
            <div key={day} className="forecast__day">
              <div className="forecast__date">{date}</div>
              <div className="forecast__max">
                {Math.round(day.day.maxtemp_c)}°C
              </div>
              <div className="forecast__min">
                {Math.round(day.day.mintemp_c)}°C
              </div>
              <div className="forecast__condition">
                {day.day.condition.text}
              </div>
              <div className="forecast__will-it-rain">
                {day.day.daily_chance_of_rain}% chance of rain
              </div>
              <br />
            </div>
          );
        })}
    </div>
  );
}

export default Forecast;
