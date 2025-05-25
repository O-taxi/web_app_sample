import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-3">
      <Container className="d-flex justify-content-between">
        <div>© 2025 MyApp</div>
        <Nav>
          <Nav.Link as={NavLink} to="/settings" className="text-white">
            設定
          </Nav.Link>
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;