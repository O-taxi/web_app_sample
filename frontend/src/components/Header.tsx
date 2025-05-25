import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#15202b' }}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">ホーム</Nav.Link>
              <Nav.Link as={NavLink} to="/about">このアプリについて</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;