import React from "react";

export default function Emoji(props) {
  return (
    <span role="img" aria-label="emoji">
      {props.icon}
    </span>
  );
}
