import React from "react";
import NewsFeed from "../../containers/NewsFeed/NewsFeed";
import Preview from "./Preview";
import Features from "./Features";
import Hero from "./Hero";

const Home = props => (
  <React.Fragment>
    <Section pt={false}>
      <NewsFeed />
    </Section>
    <Section>
      <Preview />
    </Section>
    <Section>
      <Features />
    </Section>
    <Section>
      <Hero />
    </Section>
  </React.Fragment>
);

const Section = ({ pt = true, children }) => (
  <section className={""}>{children}</section>
);

export default Home;
