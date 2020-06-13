import React from "react";
import Emoji from "./Emoji";
import sun from "./img/sun.svg";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div>
      <h3>Frankfurt am Main, DE</h3>
      <div className="row">
        <div className="col-4">
          <h6>
            <Emoji icon="📡" /> Clear sky
          </h6>
          <div className="row">
            <h1>
              19
              <span className="Units">
                <a href="/">°C</a>|<a href="/">°F</a>{" "}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-3">
          <img src={sun} alt="sun" />
        </div>
        <ul>
          <li>☞ Humidity: 36%</li>
          <li>☞ Wind: 5km/h</li>
        </ul>
      </div>
    </div>
  );
}
