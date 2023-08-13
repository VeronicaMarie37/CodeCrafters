import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css'; 


const NavigationBar = () => {
  return (
    <Navbar bg="sage" expand="lg">
      <Navbar.Brand href="/">CodeCrafters</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Courses</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tutorials">
            <Nav.Link>Tutorials</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Journal">
            <Nav.Link>Code Journal Entries</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
