import React, { useState } from "react";
import axios from "axios";

import ForecastElement from "./ForecastElement";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row Forecast">
        <ForecastElement data={forecast.list[0]} />
        <ForecastElement data={forecast.list[1]} />
        <ForecastElement data={forecast.list[2]} />
        <ForecastElement data={forecast.list[3]} />
        <ForecastElement data={forecast.list[4]} />
      </div>
    );
  } else {
    let Key = `559f875e04c47ab9cf859e8b46e9c445`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${Key}&units=metric`;
    axios.get(url).then(handleForecast);
    return <div></div>;
  }
}
