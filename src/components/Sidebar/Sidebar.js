import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { deviceWidthPX } from "../../styles/variables";

const useStyle = createUseStyles({
  sidebar: {
    position: "relative",
    backgroundColor: "teal"
  },
  sidebar__overlay: {
    position: "absolute",
    overflow: "hidden",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    color: "white",
    transition: "all 300ms",
    backgroundColor: "rgba(0,0,0,0)",
    zIndex: "-1"
  },
  active: {
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: "1"
  },
  sidebar__content: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transition: "all 300ms",
    background: "indigo",
    left: "100%",
    [`$active &`]: {
      left: "20%"
    }
  },
  [`@media only screen and (min-width: ${deviceWidthPX.sm}px)`]: {
    sidebar__overlay: {
      position: "static",
      zIndex: "1"
    },
    sidebar__content: {
      position: "static"
    }
  }
});

const Sidebar = ({ children, active, toggleHandler }) => {
  const classes = useStyle();
  return (
    <div className={classes.sidebar}>
      <div
        onClick={toggleHandler}
        // prettier-ignore
        className={
          `${classes.sidebar__overlay}
           ${active ? classes.active : ""}`
        }
      >
        <div className={classes.sidebar__content}>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
