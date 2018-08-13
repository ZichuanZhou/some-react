import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WeatherApp from "./weather-app-components/App";
import ReduxApp from './redux-practice/App'
import CounterApp from "./counter-app-components/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<ReduxApp />, document.getElementById("root"));
registerServiceWorker();
