import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src="http://share-fastly.picmonkey.com/prod/photo_posts/16UfD6SeoqN_21212409.jpg" className="brandLogo" alt="name" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Link className="nav-link" to="/">About</Link>
            <Link className="nav-link" to="/technologies">Technologies</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
