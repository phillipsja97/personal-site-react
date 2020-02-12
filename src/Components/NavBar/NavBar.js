import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#homePage">Jamie Phillips</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="#homePage">About Me</Nav.Link>
      <Nav.Link href="#tech">Technologies</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavBar;
