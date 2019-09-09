import React from "react";
import { Col } from "react-bootstrap";
import SideOverlay from "../../../components/SideOverlay/SideOverlay";
import { breakpoints } from "../../../styles/variables";
import useViewportWidth from "../../../hooks/useViewportWidth";
import useOnUnmount from "../../../hooks/useOnUnmount";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

const ResponsiveFilter = ({ render, active, hideOverlayHandler }) => {
  const currentViewportWidth = useViewportWidth();
  useOnUnmount(clearAllBodyScrollLocks);

  //  is breakpoint triggered?
  if (currentViewportWidth >= breakpoints.md) {
    // display component for larger devices
    active && hideOverlayHandler();
    enableBodyScroll();
    return <Col md={3}>{render}</Col>;
  } else {
    // display component for smaller devices
    active // if SideOverlay is active prevent scrolling
      ? disableBodyScroll(void 0, { reserveScrollBarGap: true })
      : enableBodyScroll();
    return (
      <SideOverlay active={active} hideOverlayHandler={hideOverlayHandler}>
        {render}
      </SideOverlay>
    );
  }
};

export default ResponsiveFilter;
