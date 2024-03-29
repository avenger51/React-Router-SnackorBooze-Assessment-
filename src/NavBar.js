import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Drinks
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
        </Nav>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
          </Nav>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/addmenuitem">Add Menu Item</NavLink>
          </NavItem>
        </Nav>

      </Navbar>
    </div>
  );
}

export default NavBar;
