// src/pages/ComodinPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


const ComodinPage = () => {
  return (
    <Container fluid className="not-found-container d-flex flex-column align-items-center justify-content-center">
      <h1 className="h1_comodin">404</h1>
      <p className="p_comodin">Oops! La página que buscas no existe.</p>
      <Button as={Link} to="/" variant="primary" className="home-link">
        Volver al inicio
      </Button>
    </Container>
  );
};

export default ComodinPage;
