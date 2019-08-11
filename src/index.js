import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./redux/store/configureStore";
import App from "./containers/App/App";

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));
