import React from "react";
import Emoji from "./Emoji";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div>
      <h3>Frankfurt am Main, DE</h3>
      <div className="row">
        <div className="col-5">
          <h6>
            <Emoji icon="📡" /> Clear sky
          </h6>
          <h1>
            19
            <span className="Units">
              <a href="/">°C</a>|<a href="/">°F</a>{" "}
              <span className="WeatherIcon">
                <Emoji icon="☀️" />
              </span>
            </span>
          </h1>
        </div>
        <ul>
          <li>☞ Humidity: 36%</li>
          <li>☞ Wind: 5km/h</li>
        </ul>
      </div>
    </div>
  );
}
