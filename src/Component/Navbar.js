import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";



const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
    <img src="boundspicforico.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
    <br />
      <Navbar.Brand href="/">Grant Hood</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/art">Art</Nav.Link>
          <Nav.Link href="/music">Music</Nav.Link>
          <Nav.Link href="/video">Video</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
