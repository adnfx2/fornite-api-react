import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./redux/store/configureStore";
import App from "./layout/App/App";
import "./styles/index.css";

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));
