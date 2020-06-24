import React from "react";

export default function ForecastElement(props) {
  function time() {
    let date = new Date(props.data.dt * 1000);
    let time = date.getHours();
    if (time < 10) {
      time = `0${time}`;
    }
    return `${time}:00`;
  }

  return (
    <div className="ForecastElement">
      <div>{time()}</div>
      <div className="ForecastTemp">{Math.round(props.data.main.temp)}°C</div>
    </div>
  );
}
