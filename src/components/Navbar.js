import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from './assets/logo.webp';
const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
      <img src={logo} alt="LOGO" style={{height:'70px',marginRight:'1px',marginLeft:'50px'}} />
      <Navbar.Brand href="home">
        
       <h3 style={{color:'green',marginRight:'70px',fontWeight: 'bold'}}>Printify</h3> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Link href="#catalog">Catalog</Nav.Link>

          {/* Dropdown for 'How it works' */}
          <NavDropdown title="How it works" id="how-it-works-dropdown">
            <NavDropdown.Item href="#how-it-works-1">How Printify Works</NavDropdown.Item>
            <NavDropdown.Item href="#how-it-works-2">Print On Demand</NavDropdown.Item>
            <NavDropdown.Item href="#how-it-works-3">Printify Quality Promise</NavDropdown.Item>
            <NavDropdown.Item href="#how-it-works-4">What to Sell?</NavDropdown.Item>
          </NavDropdown>

          {/* Dropdown for 'Services' */}
          <NavDropdown title="Services" id="services-dropdown">
            <NavDropdown.Item href="#service-1">Printify Studio</NavDropdown.Item>
            <NavDropdown.Item href="#service-2">Printify Express Delivery</NavDropdown.Item>
            <NavDropdown.Item href="#service-3">Transfer Products</NavDropdown.Item>
            <NavDropdown.Item href="#service-4">Order In Bulk</NavDropdown.Item>
            <NavDropdown.Item href="#service-5">Experts Program</NavDropdown.Item>
          </NavDropdown>

          {/* Dropdown for 'Use-cases' */}
          <NavDropdown title="Use-cases" id="use-cases-dropdown">
            <NavDropdown.Item href="#use-case-1">Merch for Fans</NavDropdown.Item>
            <NavDropdown.Item href="#use-case-2">Merch for eCommerce</NavDropdown.Item>
            <NavDropdown.Item href="#use-case-3">Merch for Enterprises</NavDropdown.Item>
            <NavDropdown.Item href="#use-case-4">Grow Your Store</NavDropdown.Item>
          </NavDropdown>

          {/* Dropdown for 'Need help?' */}
          <NavDropdown title="Need help?" id="need-help-dropdown">
            <NavDropdown.Item href="#help-1">Help Center</NavDropdown.Item>
            <NavDropdown.Item href="#help-2">Contacts</NavDropdown.Item>
            <NavDropdown.Item href="#help-3">My Requests</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>

          {/* Login/Signup buttons */}
          <Nav className="ml-auto">
            <Button style={{marginRight:'0px',marginLeft:'250px'}}variant="success" >Log in</Button>
            <Button style={{marginLeft:'30px'}} variant="success">Sign up</Button>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
