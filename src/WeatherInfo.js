import React from "react";
import Icon from "./Icon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>
        {props.data.city}, {props.data.country}
      </h3>
      <h6>{props.data.description}</h6>
      <Icon code={props.data.icon} alt={props.data.description} />
      <div className="row">
        <h1>
          {Math.round(props.data.temperature)}
          <span className="Units">
            <a href="/">°C</a>|<a href="/">°F</a>{" "}
          </span>
        </h1>
        <ul>
          <li className="Details">
            <strong>DETAILS:</strong>
          </li>
          <li>☞ Humidity: {props.data.humidity}%</li>
          <li>☞ Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
