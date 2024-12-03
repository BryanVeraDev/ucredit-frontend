import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import './styles/NavBar.css';

function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    toast.success('Session closed successfully');
    navigate('/login'); 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/products">
        Ucredit
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/credits">
            Credits
          </Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={handleLogout}>
          Log out
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
