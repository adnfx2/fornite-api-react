import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Home from "../Home/Home";
// const news = JSON.parse(localStorage.getItem("LOCAL_REDUX_STORE"));

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <Main>
        <Home />
      </Main>
    </div>
  </Provider>
);

export default App;
