import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { deviceWidth } from "../../styles/variables";
import previewImg from "../../assets/images/fortnite-preview.jpg";
import jumpBackImg from "../../assets/images/jumpBack.png";
import jumpFrontImg from "../../assets/images/jumpFront.png";

const useStyles = createUseStyles({
  flex_image: {
    minHeight: "60vh",
    backgroundColor: "slategray",
    backgroundImage: `url(${previewImg})`,
    backgroundSize: "cover",

    [`@media only screen and (min-width: ${deviceWidth.sm})`]: {
      minHeight: "300px"
    }
  },
  title: {
    composes: ["m-0 pt-5 pb-4 text-center"],
    fontFamily: "var(--fortnite-font)",
    color: "#fff",
    textShadow: "2px 2px 8px #212529"
  },
  jumpingTitle: {
    fontFamily: "var(--fortnite-font)",
    color: "#fff",
    textShadow: "2px 2px 8px #212529",
    fontSize: "68px",
    paddingTop: "96px",
    paddingBottom: "96px",
    composes: ["text-center m-0 pr-3 pl-3"]
  },
  jumpingContainer: {
    backgroundImage: `url(${jumpFrontImg}), url(${jumpBackImg})`,
    backgroundSize: "12%, 15%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px 30px, 95% 95%"
  },
  previewBackground: {
    composes: ["m-0"],
    backgroundColor: "#e9ecef"
  }
});

const Preview = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className="pb-5 pl-0 pr-0" fluid={true}>
        <div className={classes.jumpingContainer}>
          <h1 className={classes.jumpingTitle}>Are you ready to drop?</h1>
        </div>
        <Row className={classes.previewBackground}>
          <Col className="pr-0 pl-0" md={4}>
            <div className={classes.flex_image} />
          </Col>
          <Col>
            <h1 className={classes.title}>Getting to know!</h1>
            <p className="pb-4">
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
