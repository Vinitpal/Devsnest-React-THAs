import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar className="px-5" color="dark" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100 m-auto fs-4 pl-2 justify-content-around" navbar>
            <NavItem>
              <NavLink href="./#/day-25">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./#/day-25/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./#/day-25/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./#/day-25/profile">Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
