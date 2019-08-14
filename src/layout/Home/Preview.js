import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { deviceWidth } from "../../styles/variables";
import previewImg from "../../assets/images/fortnite-preview.jpg";

const useStyles = createUseStyles({
  flex_image: {
    width: "100%",
    height: "100%",
    minHeight: "450px",
    backgroundColor: "slategray",
    backgroundImage: `url(${previewImg})`,
    backgroundSize: "cover",

    [`@media only screen and (min-width: ${deviceWidth.sm})`]: {
      minHeight: "300px"
    }
  },
  title: {
    fontFamily: "var(--fortnite-font)",
    color: "#fff",
    textShadow: "2px 2px 8px #212529"
  },
  superTitle: {
    fontFamily: "var(--fortnite-font)",
    color: "#fff",
    textShadow: "2px 2px 8px #212529",
    fontSize: "68px",
    paddingTop: "96px",
    paddingBottom: "96px",
    composes: ["text-center m-0 pr-3 pl-3"]
  }
});

const Preview = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1 className={classes.superTitle}>Are you ready to jump?</h1>
      <Container fluid={true}>
        <Row>
          <Col className="pb-4 pr-0 pl-0" md={4}>
            <div className={classes.flex_image} />
          </Col>
          <Col>
            <h1 className={classes.title}>Getting to know!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam, autem, ullam? Labore commodi est assumenda voluptatem
              similique! Excepturi eligendi illo quis minus rem itaque illum aut
              ut. Placeat, veniam, quae. Nisi quas, enim quam ipsum impedit
              eligendi, mollitia iure maxime?
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Preview;
