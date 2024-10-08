import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GameContext } from '../context/GameContext';

const HorizontalCard = ({ showDetails = true, productos = [] }) => {
  const { games, addToCart } = useContext(GameContext);
  const itemsAVisualizar = productos.length > 0 ? productos : games;

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        {itemsAVisualizar.map((producto) => (
          <Col xs={12} className="d-flex justify-content-center mb-4" key={producto.id}>
            <Card className="d-flex flex-row" style={{ width: '90vw', maxWidth: '1000px', height: 'auto' }}>
              <div style={{ flex: '0 0 30%', height: '100%' }}>
                <Link to={`/products/${producto.id}`}>
                  <Card.Img
                    src={producto.img_url}
                    alt={producto.nombre}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Link>
              </div>
              {showDetails && (
                <Card.Body className="d-flex flex-column justify-content-between p-3" style={{ width: '70%' }}>
                  <div>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>Precio: ${producto.precio.toLocaleString("de-DE")}</Card.Text>
                  </div>
                  <div className="button_cards mt-2">
                    <Button variant="primary" onClick={() => addToCart(producto)} className="me-2">
                      Agregar al carro
                    </Button>
                    <Button variant="secondary">
                      <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
                        Volver
                      </Link>
                    </Button>
                  </div>
                </Card.Body>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HorizontalCard;
