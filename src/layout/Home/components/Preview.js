import React from "react";
import { createUseStyles } from "react-jss";
import { Container, Row, Col } from "react-bootstrap";
import CustomLink from "../../../components/CustomLink/CustomLink";
import { breakpoints } from "../../../styles/variables";
import previewImg from "../../../assets/images/fortnite-preview.jpg";
import jumpBackImg from "../../../assets/images/jumpBack.png";
import jumpFrontImg from "../../../assets/images/jumpFront.png";

const useStyles = createUseStyles({
  flex_image: {
    minHeight: "60vh",
    backgroundColor: "slategray",
    backgroundImage: `url(${previewImg})`,
    backgroundSize: "cover",

    [`@media only screen and (min-width: ${breakpoints.sm}px)`]: {
      minHeight: "300px",
      height: "100%"
    }
  },
  title: {
    composes: ["m-0 pt-5 pb-4 text-center text-light"],
    fontFamily: "var(--fortnite-font)",
    textShadow: "2px 2px 8px #212529"
  },
  jumpingTitle: {
    composes: ["text-center m-0"],
    padding: "96px 30px",
    fontFamily: "var(--fortnite-font)",
    fontSize: "68px",
    color: "#fff",
    textShadow: "2px 2px 8px #212529",
    [`@media (min-width: ${breakpoints.sm}px)`]: {}
  },
  jumpingContainer: {
    backgroundImage: `url(${jumpFrontImg}), url(${jumpBackImg})`,
    backgroundSize: "25%, 20%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-10px 20px, 97% 97%",
    [`@media (min-width: ${breakpoints.sm}px)`]: {
      backgroundSize: "15%, 15%",
      backgroundPosition: "0% 5%, 100% 100%"
    }
  },
  previewBackground: {
    composes: ["m-0"],
    backgroundColor: "hsla(210,13%,50%,.3)"
  }
});

const Preview = () => {
  const classes = useStyles();
  return (
    <section>
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
            <p className="pb-4 pl-3 pr-3">
              <q>
                Fortnite is an online video game developed by Epic Games and
                released in 2017. It is available in three distinct game mode
                versions that otherwise share the same general gameplay and game
                engine: Fortnite: Save the World, a cooperative shooter-survival
                game for up to four players to fight off zombie-like creatures
                and defend objects with fortifications they can build; Fortnite
                Battle Royale, a free-to-play battle royale game where up to 100
                players fight to be the last person standing; and Fortnite
                Creative, where players are given complete freedom to create
                worlds and battle arenas.
              </q>
              <CustomLink
                classes="text-black-50 small d-flex justify-content-end"
                external={true}
                href="https://en.wikipedia.org/wiki/Fortnite"
                placeholder={`\u2013 Wikipedia`}
              />
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Preview;
