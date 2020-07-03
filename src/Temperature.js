import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <h1>
        {Math.round(props.celsius)}
        <span className="Units">
          °C|
          <a onClick={displayFahrenheit} href="/">
            °F
          </a>
        </span>
      </h1>
    );
  } else {
    return (
      <h1>
        {Math.round((props.celsius * 9) / 5 + 32)}
        <span className="Units">
          °F|
          <a onClick={displayCelsius} href="/">
            °C
          </a>
        </span>
      </h1>
    );
  }
}
