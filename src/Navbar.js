import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <header>
      <Navbar variant="light" bg="light">
        <Nav className="me-auto d-flex justify-content-around w-100 align-items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/flash card">Flash Card</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavDropdown title="Github" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/Jegalas">Profile</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/Jegalas/webmobile_03">Repository</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;

