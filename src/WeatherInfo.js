import React from "react";
import Icon from "./Icon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>
        {props.data.city}, {props.data.country}
      </h3>
      <h6>{props.data.description}</h6>
      <Icon code={props.data.icon} alt={props.data.description} />
      <div className="row">
        <div className="col">
          <Temperature celsius={props.data.temperature} />
        </div>
        <div className="col">
          <ul>
            <li className="Details">
              <strong>DETAILS:</strong>
            </li>
            <li>☞ Humidity: {props.data.humidity}%</li>
            <li>☞ Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
