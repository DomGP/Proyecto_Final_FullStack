import { useContext, useState } from "react";
import React from "react";
import { GameContext } from "../context/GameContext";
import { Button, Image, Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { carrito, increment, decrement } = useContext(GameContext);
  const total = carrito.reduce(
    (a, producto) => a + producto.precio * producto.count,
    0
  );
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false); // Estado para manejar la alerta

  const handleCheckout = async () => {
    if (carrito.length === 0) {
      setShowAlert(true); // Muestra la alerta si el carrito está vacío
      return;
    }

    const token = localStorage.getItem("userToken");

    if (!token) {
      console.error("No se encontró token de autenticacion");
      return;
    }

    try {
      const responseOrder = await fetch("https://level-footing-438615-u9.wn.r.appspot.com/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!responseOrder.ok) {
        throw new Error("Error al crear la orden");
      }

      const newOrder = await responseOrder.json();
      console.log(newOrder)

      const productos = carrito.map((producto) => ({
        product_id: producto.id,
        cantidad: producto.count,
      }));

      const responseOrderDetails = await fetch(
        "https://level-footing-438615-u9.wn.r.appspot.com/api/agregar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            order_id: newOrder.id,
            productos,
          }),
        }
      );

      if (!responseOrderDetails.ok) {
        throw new Error("Error al agregar los detalles de la orden");
      }

      navigate("/checkout"); // Redirige a la vista de pago
    } catch (error) {
      console.error("Error al realizar el pago:", error);
    }
  };

  return (
    <Container className="container_detalle mt-5">
      <Row className="carrito_style">
        <h4>Detalles del Pedido:</h4>
        <div className="list_style">
          {carrito.length > 0 ? (
            carrito.map((producto, i) => (
              <Row className="flex_styleCarrito" key={i}>
                <Col className="first_style" xs={12} md={4}>
                  <Image
                    src={producto.img_url}
                    width="100"
                    alt={producto.nombre}
                    rounded
                  />
                  <div style={{ marginTop: "10px" }}>{producto.nombre}</div>
                </Col>

                <Col
                  className="second_style d-flex align-items-center justify-content-center"
                  xs={12}
                  md={4}
                >
                  <div className="d-flex align-items-center">
                    <div className="me-4" style={{ fontWeight: "bold" }}>
                      $
                      {(producto.precio * producto.count).toLocaleString(
                        "de-DE"
                      )}
                    </div>

                    <Button
                      variant="danger"
                      className="mx-2 btn-sm"
                      onClick={() => decrement(i)}
                    >
                      -
                    </Button>
                    <span style={{ fontWeight: "bold", margin: "0 10px" }}>
                      {producto.count}
                    </span>
                    <Button
                      variant="primary"
                      className="mx-2 btn-sm"
                      onClick={() => increment(i)}
                    >
                      +
                    </Button>
                  </div>
                </Col>
              </Row>
            ))
          ) : (
            <p>El carrito está vacío.</p>
          )}

          <div
            style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}
          >
            Total: ${total.toLocaleString("de-DE")}
          </div>

          {/* Contenedor flexible para alinear botones */}
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="primary"
              onClick={handleCheckout} // Redirige al pago
            >
              Ir a Pagar
            </Button>

            <Link to="/products" style={{ textDecoration: "none" }}>
              <Button variant="secondary">Regresar a Productos</Button>
            </Link>
          </div>
          {showAlert && (
            <Alert
              className="mt-2"
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              No hay productos en el carrito. ¡Agrega algunos para continuar con
              el pago!
            </Alert>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default CartPage;
