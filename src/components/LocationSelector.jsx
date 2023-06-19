// Enable users to select a location from a combobox
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/location-selector.css";
import { requestForecast } from "../utils/api.js";

const LocationSelector = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="input-group">
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
          className="location-input"
          type="text"
          placeholder="Enter location"
        />
        {/* TODO: Replace with search icon and move into input */}
        <button
          onClick={() => {
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
          }}
          className="search-button"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default LocationSelector;
