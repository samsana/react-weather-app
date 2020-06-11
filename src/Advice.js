import React from "react";
import Emoji from "./Emoji";

import "./Advice.css";

export default function Advice() {
  return (
    <article className="Advice">
      <div className="col">
        <h5>To wear:</h5>
        <p className="Advice">
          <Emoji icon="👠" /> ‣ high heels
        </p>
        <h5>To do:</h5>
        <p className="Advice">
          <Emoji icon="👻" /> ‣ chat with your BF
        </p>
        <h5>To be:</h5>
        <p className="Advice">
          <Emoji icon="🧘‍♀️" /> ‣ as cool as cucumber
        </p>
      </div>
    </article>
  );
}
