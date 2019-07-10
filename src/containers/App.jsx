import React, { Component } from "react";
import { Provider } from "react-redux";
import Dummy from "./Dummy";

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <h1>Dummy Component</h1>
      <Dummy />
    </div>
  </Provider>
);

export default App;
