import React from "react";
// eslint-disable-next-line
import Draggable, { DraggableCore } from "react-draggable";
import Box from "./Box";

import "./App.css";

function App() {
  let Draggable = require("react-draggable");
  // eslint-disable-next-line
  let DraggableCore = Draggable.DraggableCore;
  return (
    <Draggable>
      <div className="App">
        <Box />
        <footer>
          Coded by Anastasia Samsonova, open-sourced on{" "}
          <a
            href="https://github.com/samsana/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://quirky-pike-a69f97.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
        <small>
          ICONS:{" "}
          <a
            href="https://www.iconfinder.com/iconsets/weather-filled-outline-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Weather (filled outline)"
          </a>{" "}
          by{" "}
          <a
            href="https://www.iconfinder.com/tes_azhari22"
            target="_blank"
            rel="noopener noreferrer"
          >
            tesyar azhari
          </a>
          , licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            CC 3.0.
          </a>
        </small>
      </div>
    </Draggable>
  );
}

export default App;
