import React, { useState } from "react";
import axios from "axios";
import sun from "./img/sun.svg";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatehrData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatehrData({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      loaded: true,
    });
  }

  function getAxios() {
    const Key = `559f875e04c47ab9cf859e8b46e9c445`;
    let city = "Berlin";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <h3>
          {weatherData.city}, {weatherData.country}
        </h3>
        <h6>{weatherData.description}</h6>
        <img src={sun} alt="sun" />

        <h1>
          {Math.round(weatherData.temperature)}
          <span className="Units">
            <a href="/">°C</a>|<a href="/">°F</a>{" "}
            <span className="Details">DETAILS </span>
          </span>
        </h1>
        <ul>
          <li>☞ Humidity: {weatherData.humidity}%</li>
          <li>☞ Wind: {Math.round(weatherData.wind)} km/h</li>
        </ul>
      </div>
    );
  } else {
    getAxios();
    return <p>Fetching data...</p>;
  }
}
