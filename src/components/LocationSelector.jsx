// Enable users to select a location from a combobox
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import eng from "../locale/eng.json";
import est from "../locale/est.json";
import rus from "../locale/rus.json";
import "../styles/location-selector.css";
import { requestForecast } from "../utils/api.js";

const handleSearch = (location, dispatch) => {
  if (location === "") {
    alert("Please enter a location");
    return;
  }
  requestForecast(location).then((data) => {
    dispatch({
      type: "SET_FORECAST",
      payload: data,
    });
  });
};

const LocationSelector = ({ lang }) => {
  let translation;
  if (lang === "eng") {
    translation = eng;
  } else if (lang === "est") {
    translation = est;
  } else if (lang === "rus") {
    translation = rus;
  }

  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="input-group py-8 relative">
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(location, dispatch);
            }
          }}
          value={location}
          className="location-input text-lg rounded bg-secondary text-secondary drop-shadow py-2 pl-2"
          type="text"
          placeholder={translation.searchPlaceholder}
        />
        <button
          onClick={() => {
            handleSearch(location, dispatch);
          }}
          className="absolute right-0 text-lg py-2 px-4 text-accent"
        >
          <i className="uil uil-search"></i>
        </button>
      </div>
    </>
  );
};

LocationSelector.propTypes = {
  lang: PropTypes.string,
};

export default LocationSelector;
