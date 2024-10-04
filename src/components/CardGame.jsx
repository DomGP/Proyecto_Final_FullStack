import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GameContext } from "../context/GameContext";

const CardGame = ({ showDetails = true, productos = [] }) => {
  const { games, addToCart } = useContext(GameContext);
  const itemsAVisualizar = productos.length > 0 ? productos : games;
  

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        {itemsAVisualizar.map((producto) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center mb-4"
            key={producto.id}
          >
            <Card style={{  }}>
              <Link to={`/products/${producto.id}`}>
                <Card.Img
                  variant="top"
                  src={producto.img_url}
                  alt={producto.nombre}
                  className="img-fluid"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </Link>
              {showDetails && (
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.descripcion}</Card.Text>
                  <Card.Text>Precio: ${producto.precio.toLocaleString("de-DE")}</Card.Text>
                    <div className="button_cards">
                      <Button variant="primary"
                        onClick={() => addToCart(producto)}>Agregar al carro</Button>
                      <Button variant='primary'>
                        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
                          Volver
                        </Link>
                      </Button>
                      {/* <Button variant='primary'>
                        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
                          Ir al carrito
                        </Link>
                      </Button> */}
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

export default CardGame;
