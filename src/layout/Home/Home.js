import React from "react";
import NewsFeed from "../../containers/NewsFeed/NewsFeed";
import Preview from "./components/Preview";
import Features from "./components/Features";
import Hero from "./components/Hero";

const Home = props => (
  <React.Fragment>
    <NewsFeed />
    <Preview />
    <Features />
    <Hero />
  </React.Fragment>
);

export default Home;
