import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/lg-fornite.png";
import { createUseStyles } from "react-jss";
import { links } from "../../routes/routes";

const useStyles = createUseStyles({
  c_navbar: {
    fontFamily: "var(--fortnite-font)",
  },
  link: {
    composes: ["p-2 text-center"],
    height: "40px",
    overflow: "hidden",
    color: "white"
  },
  link__placeholder: {
    transitionProperty: "all",
    transitionDelay: "50ms",
    transitionDuration: "200ms",
    [`$link:hover &`]: {
      transform: "scale(1.2)",
      textDecoration: "underline"
    }
  },
  active: {
    color: "#0056b3"
  }
});

const Header = props => {
  const classes = useStyles();
  return (
    <Navbar
      className={classes.c_navbar}
      bg="primary"
      variant="dark"
      expand="md"
      // collapseOnSelect
    >
      <Navbar.Brand href="/home" className="w-25">
        <img src={logo} alt="fornite" width="100" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <hr className="d-sm-none" />
        <Nav className="ml-auto">
          {links.map(({ name: placeholder, path, exact }) => (
            <NavLink
              activeClassName={classes.active}
              className={classes.link}
              key={path}
              to={path}
              exact={exact}
            >
              <div className={classes.link__placeholder}>{placeholder}</div>
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
