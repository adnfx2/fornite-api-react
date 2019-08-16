import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import CustomLink from "../../components/CustomLink/CustomLink";
import { createUseStyles } from "react-jss";
import heroImgLandscape from "../../assets/images/fortniteHeroLandscape.jpg";
import heroImgPortrait from "../../assets/images/fortniteHeroPortrait.jpeg";
import { deviceWidthPX } from "../../styles/variables";
import { fortniteReferences } from "../../utils/links/links_references";
const PORTRAIT = "PORTRAIT";
const LANDSCAPE = "LANDSCAPE";

const useStyles = createUseStyles({
  button: {
    position: "absolute",
    bottom: "35%",
    left: "50%",
    transform: "translateX(-50%)",
    padding: ".6rem 1.8rem 0rem",
    fontFamily: "var(--fortnite-font)",
    fontSize: "1.3rem",
    lineHeight: "2",
    zindex: "1000"
  },
  flexBackground: {
    composes: ["d-block w-100"],
    padding: ({ padding }) => padding || ""
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
    <div className="pt-5 pb-5 position-relative">
      <Jumbotron fluid={true}>
        <img
          className={classes.flexBackground}
          src={image.selectedImage}
          alt="Fortnite Hero Image"
        />
        <CustomLink
          href={fortnite_references.dow}
          external={true}
          placeholder={<Button className={classes.button}>Join now!</Button>}
        />
      </Jumbotron>
    </div>
  );
};

export default Hero;
