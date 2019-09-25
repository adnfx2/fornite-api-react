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

const ResponsiveFilterOptions = ({ render, visible, filterToggleHandler }) => {
  const currentViewportWidth = useViewportWidth();
  useOnUnmount(clearAllBodyScrollLocks);

  //  is breakpoint triggered?
  if (currentViewportWidth >= breakpoints.lg) {
    // display component for larger devices
    visible && filterToggleHandler();
    enableBodyScroll();
    return <Col md={3}>{render}</Col>;
  } else {
    // display component for smaller devices
    visible // if SideOverlay is visible prevent scrolling
      ? disableBodyScroll(void 0, { reserveScrollBarGap: true })
      : enableBodyScroll();
    return (
      <SideOverlay active={visible} toggleOverlayHandler={filterToggleHandler}>
        {render}
      </SideOverlay>
    );
  }
};

export default ResponsiveFilterOptions;
