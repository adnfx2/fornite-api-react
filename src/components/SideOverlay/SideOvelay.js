import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { deviceWidthPX } from "../../styles/variables";

//  Backdrop
const useStyleBackdrop = createUseStyles({
  backdrop: {
    position: "absolute",
    overflow: "hidden",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    color: "white",
    transition: "all 300ms",
    backgroundColor: "rgba(0,0,0,0)",
    zIndex: "-1",
    [`.active &`]: {
      backgroundColor: "rgba(0,0,0,0.3)",
      zIndex: "0"
    }
  }
});
const Backdrop = ({ children, active, onCancel }) => {
  const { backdrop } = useStyleBackdrop();
  return <div className={backdrop} onClick={onCancel} />;
};

//  Content
const useStyleContent = createUseStyles({
  content: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transition: "all 300ms",
    backgroundColor: "slategray",
    left: "100%",
    [`.active &`]: {
      left: "20%"
    }
  }
});
const Content = ({ children }) => {
  const { content } = useStyleContent();
  return <div className={content}>{children}</div>;
};

// SideOvelay
const useStyleSideOverlay = createUseStyles({
  sideoverlay: {}
});
const SideOverlay = ({ children, active, onCancel }) => {
  const { sideoverlay } = useStyleSideOverlay();
  const classes = `${sideoverlay} ${active ? "active" : ""}`;
  return (
    <div className={classes}>
      <Backdrop onCancel={onCancel} />
      <Content>{children}</Content>
    </div>
  );
};

export default SideOverlay;
