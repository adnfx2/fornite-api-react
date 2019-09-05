import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { deviceWidthPX } from "../../styles/variables";

//  Backdrop
const useStyleBackdrop = createUseStyles({
  backdrop: {
    width: "100%",
    height: "100%",
    color: "white",
    transition: "background-color ease-in-out 300ms 20ms",
    backgroundColor: "rgba(0,0,0,0)",
    [`.active &`]: {
      backgroundColor: "rgba(0,0,0,0.3)"
    }
  }
});
const Backdrop = ({ children, active, onClick }) => {
  const { backdrop } = useStyleBackdrop();
  return (
    <div className={backdrop} onClick={onClick}>
      {children}
    </div>
  );
};

//  Content
const useStyleContent = createUseStyles({
  content: {
    width: "100%",
    height: "100%",
    transition: "margin-left ease-in-out 300ms 20ms",
    backgroundColor: "slategray",
    marginLeft: "100%",
    [`.active &`]: {
      marginLeft: "50%"
    }
  }
});
const Content = ({ children }) => {
  const { content } = useStyleContent();
  return (
    <div onClick={e => e.stopPropagation()} className={content}>
      {children}
    </div>
  );
};

// SideOvelay
const useStyleSideOverlay = createUseStyles({
  sideoverlay: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transition: "z-index ease-in-out 300ms 10ms",
    zIndex: -1,
    [`&.active`]: {
      zIndex: 1
    },
    [`@media only screen and (min-width: ${deviceWidthPX.sm}px)`]: {
      position: "static",
      zIndex: "initial"
    }
  }
});
const SideOverlay = ({ children, active, hideOverlayHandler }) => {
  const { sideoverlay } = useStyleSideOverlay();
  const classes = `${sideoverlay} ${active ? "active" : ""}`;
  return (
    <div className={classes}>
      <Backdrop onClick={hideOverlayHandler}>
        <Content>{children}</Content>
      </Backdrop>
    </div>
  );
};

export default SideOverlay;
