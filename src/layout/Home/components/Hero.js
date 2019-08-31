import React, { useState, useEffect } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import CustomLink from "../../../components/CustomLink/CustomLink";
import { createUseStyles } from "react-jss";
import heroImgLandscape from "../../../assets/images/fortniteHeroLandscape.jpg";
import heroImgPortrait from "../../../assets/images/fortniteHeroPortrait.jpeg";
import { deviceWidthPX } from "../../../styles/variables";
import { fortniteReferences } from "../../../utils/links/links_references";

const useStyles = createUseStyles({
  button: {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    padding: ".6rem 1.8rem 0rem",
    fontFamily: "var(--fortnite-font)",
    fontSize: "1.3rem",
    lineHeight: "2",
    letterSpacing: "1px",
    [`@media (min-width: ${deviceWidthPX.sm}px)`]: {
      bottom: "15%",
      fontSize: "calc(0.7vw + 1.6rem)"
    }
  },
  flexBackground: {
    composes: ["d-block w-100"],
    padding: ({ padding }) => padding || ""
  },
  c_jumbotron: {
    composes: ["m-0 pt-5 pb-5"],
    backgroundColor: "hsla(210,13%,50%,.3)"
  }
});

const Hero = props => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleScreenResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  }, [screenWidth]);

  const image =
    screenWidth < deviceWidthPX.sm
      ? { selectedImage: heroImgPortrait, styles: { padding: "pr-4 pl-4" } }
      : { selectedImage: heroImgLandscape, styles: {} };

  const classes = useStyles(image.styles);

  return (
    <section>
      <div className="pt-5 position-relative">
        <Jumbotron className={classes.c_jumbotron} fluid={true}>
          <img
            className={classes.flexBackground}
            src={image.selectedImage}
            alt="Fortnite Hero"
          />
          <CustomLink
            href={fortniteReferences.download.endpoint}
            external={true}
            placeholder={<Button className={classes.button}>Join now!</Button>}
          />
        </Jumbotron>
      </div>
    </section>
  );
};

export default Hero;
