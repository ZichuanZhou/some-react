import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WeatherApp from "./weather-app-components/App";
import CounterApp from "./counter-app-components/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<CounterApp />, document.getElementById("root"));
registerServiceWorker();
