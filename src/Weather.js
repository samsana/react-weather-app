import React from "react";
import "./Emoji";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import Emoji from "./Emoji";

export default function Weather(props) {
  return (
    <div>
      <h3>Frankfurt am Main, DE</h3>
      <h1 className="WeatherMain">
        19°
        <span className="units">
          <a href="/">°C</a>|<a href="/">°F</a> <Emoji icon="📡" />
          <small> Clear sky</small>
        </span>
      </h1>
      <div className="row">
        <div className="col-2">
          <h1 className="Icon">
            <Emoji icon="🌤" />
          </h1>
        </div>
        <div className="col">
          <ul>
            <li>☞ Humidity:</li>
            <li>☞ Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
