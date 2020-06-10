import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-10">
        <h3>Frankfurt am Main, DE</h3>
      </div>
      <div className="col-4">
        <h1>
          19{" "}
          <span className="units">
            <a href="/">°C</a>|<a href="/">°F</a>
          </span>
        </h1>
      </div>
      <div className="col-4">
        <p>Storming rain</p>
      </div>
      <div className="col-4">
        <ul>
          <li>Humidity</li>
          <li>Wind</li>
        </ul>
      </div>
    </div>
  );
}
