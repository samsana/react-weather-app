import React from "react";

export default function Axios() {
  function getAxios() {
    const Key = `559f875e04c47ab9cf859e8b46e9c445`;
    let city = "Berlin";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
  }
}
