import React, { useState, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/images/lg-fornite.png";
import { createUseStyles } from "react-jss";
import { links } from "../../routes/routes";
import useCaptureOuterClick from "../../hooks/useCaptureOuterClick";

const useStyles = createUseStyles({
  c_navbar: {
    fontFamily: "var(--fortnite-font)"
  },
  link: {
    composes: ["text-center w-100"],
    height: "40px",
    color: "#fff"
  },
  link__placeholder: {
    transitionProperty: "all",
    transitionDelay: "50ms",
    transitionDuration: "200ms",
    [`$link:hover &`]: {
      transform: "scale(1.2)",
      textDecoration: "underline"
    }
  }
});

const Header = props => {
  const [toggleNav, setToggleNav] = useState(false);
  const navRef = useRef(null);
  const outerClickHandler = e => {
    // Set toggleNav to false only if NavBar.Toggle is not being pressed
    !navRef.current.contains(e.target) && setToggleNav(false);
  };
  useCaptureOuterClick(outerClickHandler, toggleNav);
  const styles = useStyles();

  return (
    <Navbar
      className={styles.c_navbar}
      bg="primary"
      variant="dark"
      expand="md"
      expanded={toggleNav}
      onToggle={e => setToggleNav(e)}
    >
      <Navbar.Brand href="/home" className="w-25">
        <img src={logo} alt="fornite" width="100" />
      </Navbar.Brand>
      <div ref={navRef}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
      <Navbar.Collapse>
        <hr className="d-sm-none" />
        <Nav className="ml-auto">
          {links.map(({ name: placeholder, path, exact }) => (
            <LinkContainer
              className={styles.link}
              key={path}
              to={path}
              exact={exact}
            >
              <Nav.Link>
                <div className={styles.link__placeholder}>{placeholder}</div>
              </Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
