import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardGame = ({ showDetails = true }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-md-4" key={producto.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.img_url} alt={producto.nombre} />
            {showDetails && (
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Button variant="primary">Comprar por ${producto.precio}</Button>
              </Card.Body>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardGame;
