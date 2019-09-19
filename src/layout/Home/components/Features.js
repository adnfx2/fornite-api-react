import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import { features } from "./Features_data";
import { createUseStyles } from "react-jss";
import { breakpoints } from "../../../styles/variables";

const useStyles = createUseStyles({
  features__title: {
    composes: ["text-center pb-5"],
    fontFamily: "var(--fortnite-font)",
    color: "#fff",
    textShadow: "2px 2px 8px #212529",
    [`@media only screen and (min-width: ${breakpoints.sm}px)`]: {
      fontSize: "calc(40px + 1vw)"
    }
  }
});

const renderList = items =>
  items ? (
    items.map(({ title, body, image }) => (
      <Col key={title} md={4} className="pt-4 pb-4 pl-3 pr-3">
        <Media className="flex-column align-items-center ">
          <img src={image} alt="alt" width={24 * 4} height={24 * 4} />
          <Media.Body className={"text-center"}>
            <h3 className="m-0 pt-4 pb-4">{title}</h3>
            <p>{body}</p>
          </Media.Body>
        </Media>
      </Col>
    ))
  ) : (
    <p>Something when wrong here...</p>
  );

const Home = props => {
  const classes = useStyles();
  return (
    <section>
      <Container className="pt-5 pb-4" fluid={true}>
        <h1 className={classes.features__title}>Gametributes!</h1>
        <Row noGutters={true}>{renderList(features)}</Row>
      </Container>
    </section>
  );
};
export default Home;
