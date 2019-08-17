import React from "react";
import NewsFeed from "../../containers/NewsFeed/NewsFeed";
import Preview from "./Preview";
import Features from "./Features";
import Hero from "./Hero";

const Home = props => (
  <React.Fragment>
    <section>
      <NewsFeed />
    </section>
    <section>
      <Preview />
    </section>
    <section>
      <Features />
    </section>
    <section>
      <Hero />
    </section>
  </React.Fragment>
);

export default Home;
