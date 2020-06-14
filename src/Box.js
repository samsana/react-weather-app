import React from "react";
import Weather from "./Weather";
import FamousCities from "./FamousCities";
import Forecast from "./Forecast";
import Form from "./Form";

import "bootstrap/dist/css/bootstrap.css";
import "./Box.css";

export default function Box() {
  return (
    <div>
      <Form />
      <div className="Box">
        <FamousCities />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
