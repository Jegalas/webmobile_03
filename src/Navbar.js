import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <header>
      <Navbar variant="light" bg="light">
        <Nav className="me-auto d-flex justify-content-around w-100 align-items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movie</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavDropdown title="Github" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/Shafiga2000">Shafiga Hasanova</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/ulviyyamammadova">Ulviyya Mammdova</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/isalahov12393">Isa Salahov</NavDropdown.Item>
          </NavDropdown>
          <NavLink to="#">Youtube</NavLink>
        </Nav>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;

