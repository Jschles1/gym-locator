import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => 
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand className="main-header">
        <h1>Gym Locator</h1>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight className="links">
      <NavItem href="#">Search</NavItem>
      <NavItem href="#">Starred Gyms</NavItem>
      <NavItem href="#">About Me</NavItem>
    </Nav>
  </Navbar>

export default NavbarComponent;