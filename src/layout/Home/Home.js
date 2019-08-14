import React from "react";
import NewsFeed from "../../containers/NewsFeed/NewsFeed";
import Preview from "./Preview";
import Features from "./Features";
import Hero from "./Hero";

const Home = props => (
  <React.Fragment>
    <Section>
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

const Section = ({ className, children }) => (
  <section className={`pt-3 pb-5`}>{children}</section>
);
//mt-4 ${className || ""}
export default Home;
