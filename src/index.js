import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.scss"
import configureStore from "./redux/store/configureStore";
import App from "./containers/App";

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));
