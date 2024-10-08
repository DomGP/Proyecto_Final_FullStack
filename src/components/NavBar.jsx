import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GameContext } from "../context/GameContext";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faUserPlus,
  faHouse,
  faGamepad,
  faUserCheck,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../context/UserContext";

const NavBar = () => {
  const { carrito } = useContext(GameContext);
  const { user, logout } = useUser();
  const totalItems = carrito.reduce((acc, item) => acc + item.count, 0);

  return (
    <Navbar className="navbar_style text-white justify-content-center">
      <Container className="m-0">
        <Navbar.Brand as={Link} to="/">
          Games Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHouse} />
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              <FontAwesomeIcon icon={faGamepad} />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signup">
              <FontAwesomeIcon icon={faUserPlus} />
            </Nav.Link>
            {user.token ? (
              <>
                <Nav.Link as={Link} to="/" onClick={logout}>
                  <FontAwesomeIcon icon={faUserXmark} />
                </Nav.Link>{" "}
              </>
            ) : (
              <Nav.Link as={Link} to="login">
                <FontAwesomeIcon icon={faUserCheck} />
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>{totalItems} </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
