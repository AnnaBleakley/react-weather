import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <p>
        <a href="https://github.com/AnnaBleakley/react-weather">
          Open-source code
        </a>
        by Anna Bleakley
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
