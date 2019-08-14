import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    top: "2em",
    borderRadius: "10px",
    padding: "0.9em",
    opacity: "0.9",
    boxShadow: "0 0 30px hsla(180, 0%, 100%, 0.5)",
    cursor: "pointer",
    fontSize: "12px",
    background: mainColor => mainColor,
    [`&:hover $body`]: {
      marginTop: "0.25em",
      maxHeight: "3em"
    }
  },
  title: {
    margin: "0",
    fontSize: "1.1em",
    letterSpacing: "0.2px"
  },
  body: {
    height: "auto",
    maxHeight: "0",
    margin: "0",
    padding: "0",
    fontSize: "0.8em",
    overflow: "hidden",
    letterSpacing: "0.2px",
    transitionProperty: "max-height margin",
    transitionDuration: "300ms",
    transitionDelay: "50ms",
    transitionTimingFunction: "ease-in-out"
  }
});

const Snippet = ({ title, body, meta: { mainColor } }) => {
  const classes = useStyles(mainColor);
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.body}>{body}</p>
      </div>
    </React.Fragment>
  );
};

export default Snippet;
