import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-auto py-3" style={{ backgroundColor: '#15202b' }}>
      <Container className="d-flex justify-content-between">
        <div>© 2025 MyApp</div>
        <Nav>
          <Nav.Link as={NavLink} to="/settings" className="text-white fs-5">
            設定
          </Nav.Link>
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;