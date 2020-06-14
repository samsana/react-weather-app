import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Form from "./Form";

import "bootstrap/dist/css/bootstrap.css";
import "./Box.css";

export default function Box() {
  return (
    <div>
      <Form />
      <div className="Box">
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
