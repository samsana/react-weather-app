import React from "react";

import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
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
