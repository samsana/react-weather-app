import React from "react";
import Weather from "./Weather";
import FamousCities from "./FamousCities";
import Forecast from "./Forecast";
import Emoji from "./Emoji";

import "bootstrap/dist/css/bootstrap.css";
import "./Box.css";

export default function Box() {
  return (
    <div className="Box">
      <FamousCities />
      <div class="input-group mb-3 form">
        <input
          type="search"
          class="form-control"
          placeholder="Where to, Miss?"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            ...To the <Emoji icon="🌟🌟🌟" />
          </button>
        </div>
      </div>
      <Weather />
      <Forecast />
    </div>
  );
}
