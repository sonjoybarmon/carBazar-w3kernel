import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";
import Container from "@material-ui/core/Container";
import { UserLogin } from "../../../Contexts/ContextAuth/ContextLogin";

const NavMenu = () => {
  const [login, setLogin, userSignOut] = useContext(UserLogin);

  return (
    <Navbar
      className="custom_menu"
      expand="lg"
      style={{ backgroundColor: "#251e3a", color: "#ffffff" }}
    >
      {/* <div className='container'> */}
      <Container>
        <Navbar.Brand style={{ float: "left" }}>
          <h2 style={{ color: "#909095" }}>
            <Link to="/" className="linkStyle">
              CarBaZaR
            </Link>
          </h2>
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
              <NavLink
                activeClassName="activeText"
                to="/cars"
                className="nav_li"
              >
                CARS
              </NavLink>
            </li>
            <li className="menu_li">
              <NavLink
                activeClassName="activeText"
                to="/contact"
                className="nav_li"
              >
                CONTACT US
              </NavLink>
            </li>
            <li className="menu_li">
              <NavLink
                activeClassName="activeText"
                to="/addCard"
                className="nav_li"
              >
                ADD CARD
              </NavLink>
            </li>
            <li className="menu_li">
              <NavLink
                activeClassName="activeText"
                to="/dashboard"
                className="nav_li"
              >
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
              {login.email || localStorage.getItem("email") ? (
                <Button className="btn btn-primary" onClick={userSignOut}>
                  Log out
                </Button>
              ) : (
                <Link to="/login" className="linkStyle">
                  <Button className="btn btn-primary">Log In</Button>
                </Link>
              )}
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
