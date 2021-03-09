import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";
import Container from "@material-ui/core/Container";

const NavMenu = () => {
  return (
    <Navbar
      className="custom_menu"
      expand="lg"
      style={{ backgroundColor: "#251e3a", color: "#ffffff" }}
    >
      {/* <div className='container'> */}
      <Container>
        <Navbar.Brand style={{ float: "left" }}>
          <h2 style={{ color: "#909095" }}>CarBaZaR</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ width: "900px", float: "right" }}
          id="basic-navbar-nav"
        >
          <Nav className="ml-auto">
            <li className="menu_li">
              <NavLink activeClassName="activeText" to="/" className="nav_li">
                HOME
              </NavLink>
            </li>
            <li className="menu_li">
              <NavLink activeClassName="activeText" to="/" className="nav_li">
                CARS
              </NavLink>
            </li>
            <li className="menu_li">
              <NavLink activeClassName="activeText" to="/" className="nav_li">
                CONTACT US
              </NavLink>
            </li>
            <li className="menu_li">
              <NavLink activeClassName="activeText" to="/" className="nav_li">
                ABOUT
              </NavLink>
            </li>
            <li className="menu_li">
              <NavLink activeClassName="activeText" to="/" className="nav_li">
                DASHBOARD
              </NavLink>
            </li>
            {/* <li className="menu_li">
              <NavLink
                activeClassName="activeText"
                to="/addMovie"
                className="nav_li"
              >
                ADD MOVIE
              </NavLink>
            </li> */}
            <li className="menu_li">
              <Button className="btn btn-primary">
                <Link to="/login" className="linkStyle">
                  LOGIN
                </Link>
              </Button>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
