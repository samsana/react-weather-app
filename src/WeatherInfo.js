import React from "react";
import brokenClouds from "./img/brokenClouds.svg";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>
        {props.data.city}, {props.data.country}
      </h3>
      <h6>{props.data.description}</h6>
      <img src={brokenClouds} alt={props.data.description} />
      <h1>
        {Math.round(props.data.temperature)}
        <span className="Units">
          <a href="/">°C</a>|<a href="/">°F</a>{" "}
          <span className="Details">DETAILS </span>
        </span>
      </h1>
      <ul>
        <li>☞ Humidity: {props.data.humidity}%</li>
        <li>☞ Wind: {Math.round(props.data.wind)} km/h</li>
      </ul>
    </div>
  );
}
