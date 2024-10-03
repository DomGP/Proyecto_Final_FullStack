import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const CardGame = ({ showDetails = true }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {productos.map((producto) => (
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4" key={producto.id}>
            <Card style={{ width: "18rem" }}>
              <Link to={`/products/${producto.id}`}> {/* Enlaza a la ruta de detalles del producto */}
                <Card.Img 
                  variant="top" 
                  src={producto.img_url} 
                  alt={producto.nombre} 
                  className="img-fluid"
                  style={{ height: "300px", objectFit: "cover" }} // Cambié a "cover" para mejor ajuste
                />
              </Link>
              {showDetails && (
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.descripcion}</Card.Text>
                  <Button variant="primary">Comprar por ${producto.precio}</Button>
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
