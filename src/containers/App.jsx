import React, { Component } from "react";
import { Provider } from "react-redux";
import Gallery from "./Gallery";

const App = ({ store }) => (
  <Provider store={store}>
    <div className="container">
      <h1 className="text-center">Items Api</h1>
      <Gallery />
    </div>
  </Provider>
);

export default App;
