import React, { useState } from "react";
import axios from "axios";
import DisplayDate from "./DisplayDate";
import WeatherInfo from "./WeatherInfo";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState("Berlin");
  const [weatherData, setWeatehrData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatehrData({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      loaded: true,
    });
  }

  function getAxios() {
    const Key = `559f875e04c47ab9cf859e8b46e9c445`;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
  }

  function handleSubnit(event) {
    event.preventDefault();
    getAxios();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div>
        <small>
          <DisplayDate />
        </small>
        <form onSubmit={handleSubnit} className="input-group mb-3 Form">
          <input
            onChange={handleChange}
            type="search"
            className="form-control"
            placeholder="Type in a city"
            autoFocus="on"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </div>
        </form>
        <div className="Weather">
          <WeatherInfo data={weatherData} />
          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    getAxios();
    return <p>Fetching data...</p>;
  }
}
