import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Importa el componente para usar íconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa el ícono específico que necesitas
import { faCartShopping, faUser, faUserPlus, faHouse } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Container className="m-0">
        <Navbar.Brand href="/">Games Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><FontAwesomeIcon icon={faHouse} /></Nav.Link>
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/signup"><FontAwesomeIcon icon={faUserPlus} /></Nav.Link>
            <Nav.Link eventKey={2} href="/profile"><FontAwesomeIcon icon={faUser} /></Nav.Link>
            <Nav.Link href="/cart"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar