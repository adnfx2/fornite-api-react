import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/lg-fornite.png";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  c_navbar: {
    fontFamily: "var(--fortnite-font)"
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
    >
      <Navbar.Brand href="#" className="w-25">
        <img src={logo} alt="fornite" width="100" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <hr className="d-sm-none" />
        <Nav className="ml-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Items</Nav.Link>
          <Nav.Link href="">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
