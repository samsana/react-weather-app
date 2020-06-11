import React from "react";
import Weather from "./Weather";
import Table from "./Table";
import Forecast from "./Forecast";

import "bootstrap/dist/css/bootstrap.css";
import "./Box.css";
import Emoji from "./Emoji";

export default function Box() {
  return (
    <div className="Box">
      <Table />
      <div class="input-group mb-3">
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
      </div>{" "}
      <Weather />
      <Forecast />
    </div>
  );
}
