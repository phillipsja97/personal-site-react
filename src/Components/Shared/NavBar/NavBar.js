import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href=".homeScreen"><img src="http://share-fastly.picmonkey.com/prod/photo_posts/16UfD6SeoqN_21212409.jpg" className="brandLogo" alt="name" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="#aboutMe">About Me</Nav.Link>
      <Nav.Link href="#tech">Technologies</Nav.Link>
      <Nav.Link href="#projSection">Projects</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavBar;
