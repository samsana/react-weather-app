import React from "react";
// eslint-disable-next-line
import Draggable, { DraggableCore } from "react-draggable";
import Box from "./Box";

import "./App.css";

function App() {
  // eslint-disable-next-line
  let Draggable = require("react-draggable");
  // eslint-disable-next-line
  let DraggableCore = Draggable.DraggableCore;
  return (
    <Draggable>
      <div className="App">
        <header className="App-header">
          <h1>Weather App!</h1>
        </header>
        <Box />
      </div>
    </Draggable>
  );
}

export default App;
