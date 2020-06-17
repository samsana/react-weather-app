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
      <div className="MainIcon">
        <Icon code={props.data.icon} alt={props.data.description} />
      </div>
      <div className="row">
        <div className="col12 col-sm">
          <Temperature celsius={props.data.temperature} />
        </div>
        <div className="col12 col-sm">
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
