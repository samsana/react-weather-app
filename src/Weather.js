import React from "react";
import Emoji from "./Emoji";
import Advice from "./Advice";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div>
      <h3>Frankfurt am Main, DE</h3>
      <small>
        <Emoji icon="📡" /> Clear sky
      </small>

      <div className="row">
        <div className="col-3">
          <h1 className="WeatherMain">
            19
            <span className="Units">
              <a href="/">°C</a>|<a href="/">°F</a>
              <br />
            </span>
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
