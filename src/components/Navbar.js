import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => 
  <Navbar>
    <Navbar.Header className="main-header">
      <h1>Gym Locator</h1>
      <Nav className="links">
        <NavItem href="#">Search</NavItem>
        <NavItem href="#">Starred Gyms</NavItem>
        <NavItem href="#">About Me</NavItem>
      </Nav>
    </Navbar.Header>
    
  </Navbar>

export default NavbarComponent;