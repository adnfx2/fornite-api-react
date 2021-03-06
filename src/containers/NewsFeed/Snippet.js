import React from "react";
import { createUseStyles } from "react-jss";
import color from "color";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    top: "1em",
    borderRadius: "10px",
    padding: "0.9em",
    opacity: "0.82",
    boxShadow: mainColor => {
      return `0px 0px 20px ${color("white")
        .alpha(0.4)
        .hsl()}`;
    },
    cursor: "pointer",
    fontSize: "calc(.7vw + 12px)",
    color: "#fafafa",
    textShadow: "0 0 4px rgba(0,0,0,.4)",
    background: mainColor => mainColor,
    transitionProperty: "opacity",
    transitionDuration: "300ms",
    transitionDelay: "50ms",
    transitionTimingFunction: "ease-in-out",
    [`&:hover`]: {
      opacity: "0.97"
    },
    [`&:hover $body`]: {
      marginTop: "0.25em",
      maxHeight: `5em`
    }
  },
  title: {
    margin: "0",
    fontSize: "1.1em",
    fontWeight: "bold",
    letterSpacing: "0.2px"
  },
  body: {
    height: "auto",
    maxHeight: "0",
    margin: "0",
    padding: "0",
    fontSize: ".8em",
    overflowY: "scroll",
    letterSpacing: "0.2px",
    transitionProperty: "max-height margin",
    transitionDuration: "300ms",
    transitionDelay: "50ms",
    transitionTimingFunction: "ease-in-out",
    [`&::-webkit-scrollbar`]: {
      width: "0px"
    }
  }
});

const Snippet = ({ title, body, meta: { mainColor } }) => {
  const styles = useStyles(
    mainColor.length < 7 ? color("slategray").hex() : mainColor
  );
  return (
    <React.Fragment>
      <div className={`${styles.container}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
      </div>
    </React.Fragment>
  );
};

export default Snippet;
