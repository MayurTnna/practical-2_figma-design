import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/images/Panto.svg";
import bag from "../../../assets/images/Bag.svg";
import egg from "../../../assets/images/egg-zero.svg";

import "../Header/Header.scss";

function Header() {
  return (
    <>
      <Navbar className="navbar-main" expand="md">
        <Navbar.Brand href="#home">
          <img src={logo} alt="main-logo" />
        </Navbar.Brand>
        <div className="px-3">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler-dark "
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar-main-text nav-gap">
            <NavDropdown
              className="navbar-main-text"
              title="Furniture"
              id="basic-nav-dropdown"
            ></NavDropdown>
            <Nav.Link href="#link" className="navbar-main-text">
              Shop
            </Nav.Link>
            <Nav.Link href="#link" className="navbar-main-text">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="navbar-main-text">
              Contact
            </Nav.Link>
          </Nav>
          <div className="bag-container">
            <Nav.Link href="#link">
              <div className="bag-main me-aut">
                <img src={bag} alt="bag" className="bag" />
                <img src={egg} alt="egg" className="egg" />
              </div>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
