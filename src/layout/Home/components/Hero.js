import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import CustomLink from "../../../components/CustomLink/CustomLink";
import { createUseStyles } from "react-jss";
import heroImgLandscape from "../../../assets/images/fortniteHeroLandscape.jpg";
import heroImgPortrait from "../../../assets/images/fortniteHeroPortrait.jpeg";
import { breakpoints } from "../../../styles/variables";
import { fortnite as fortniteReferences } from "../../../utils/links/links_references";
import useViewportWidth from "../../../hooks/useViewportWidth";

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
    [`@media only screen and (min-width: ${breakpoints.sm}px)`]: {
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
  const currentViewportWidth = useViewportWidth();

  const image =
    currentViewportWidth < breakpoints.sm
      ? { selectedImage: heroImgPortrait, styles: { padding: "pr-4 pl-4" } }
      : { selectedImage: heroImgLandscape, styles: {} };

  const styles = useStyles(image.styles);
  const fortniteDownloadRef = fortniteReferences[1].endpoint;

  return (
    <section>
      <div className="pt-5 position-relative">
        <Jumbotron className={styles.c_jumbotron} fluid={true}>
          <img
            className={styles.flexBackground}
            src={image.selectedImage}
            alt="Fortnite Hero"
          />
          <CustomLink
            href={fortniteDownloadRef}
            external={true}
            placeholder={<Button className={styles.button}>Join now!</Button>}
          />
        </Jumbotron>
      </div>
    </section>
  );
};

export default Hero;
