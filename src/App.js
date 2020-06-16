import React from "react";
// eslint-disable-next-line
import Draggable, { DraggableCore } from "react-draggable";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  let Draggable = require("react-draggable");
  // eslint-disable-next-line
  let DraggableCore = Draggable.DraggableCore;
  return (
    <div className="App">
      <div className="Box">
        <Weather />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
