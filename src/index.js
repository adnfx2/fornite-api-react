import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./redux/store/configureStore";
// import App from "./layout/App/App";
import "./styles/index.css";

import { fetchNews2 } from "./redux/actions/actions";

const store = configureStore();

store.dispatch(fetchNews2());

// ReactDOM.render(<App store={store} />, document.getElementById("root"));
