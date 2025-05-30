import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { instance } = useMsal();
  const { getUser } = useAuth();
  const user = getUser();

  const handleLogin = () => {
    instance.loginRedirect({
      scopes: ["openid", "profile", "email"],
    });
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <header>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#15202b" }}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            MyApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                ホーム
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                このアプリについて
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {user ? (
                <NavDropdown title={user.name} align="end">
                  <NavDropdown.Item onClick={handleLogout}>
                    ログアウト
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button variant="outline-light" onClick={handleLogin}>
                  Microsoftでサインイン
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;