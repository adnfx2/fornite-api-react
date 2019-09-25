import React from "react";
import { createUseStyles } from "react-jss";

//  Backdrop
const useStyleBackdrop = createUseStyles({
  backdrop: {
    display: "flex",
    justifyContent: "flex-end",
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
    position: "relative",
    minWidth: "275px",
    height: "100%",
    transition: "left ease-in-out 300ms 20ms",
    backgroundColor: "#fff",
    overflowY: "scroll",
    left: "100%",
    [`.active &`]: {
      left: "0%"
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
    zIndex: -1,
    transition: "z-index ease-in-out 300ms 10ms",
    [`&.active`]: {
      zIndex: 1
    }
  }
});
const SideOverlay = ({ children, active, toggleOverlayHandler }) => {
  const { sideoverlay } = useStyleSideOverlay();
  const classes = `${sideoverlay} ${active ? "active" : ""}`;
  return (
    <div className={classes}>
      <Backdrop onClick={toggleOverlayHandler}>
        <Content>{children}</Content>
      </Backdrop>
    </div>
  );
};

export default SideOverlay;
