import React from "react";

import brokenClouds from "./img/brokenClouds.svg";
import sun from "./img/sun.svg";
import moonNight from "./img/moonNight.svg";
import cloudy from "./img/cloudy.svg";
import moonCloud from "./img/moonCloud.svg";
import cloud from "./img/cloud.svg";
import drops from "./img/drops.svg";
import rain from "./img/rain.svg";
import thunder from "./img/thunder.svg";
import snowMan from "./img/snowMan.svg";
import eye from "./img/eye.svg";

export default function Icon(props) {
  const iconMapping = {
    "01d": sun,
    "01n": moonNight,
    "02d": cloudy,
    "02n": moonCloud,
    "03d": cloud,
    "03n": cloud,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": drops,
    "09n": drops,
    "10d": rain,
    "10n": rain,
    "11d": thunder,
    "11n": thunder,
    "13d": snowMan,
    "13n": snowMan,
    "50d": eye,
    "50n": eye,
  };

  return <img src={iconMapping[props.code]} alt={props.alt} />;
}
