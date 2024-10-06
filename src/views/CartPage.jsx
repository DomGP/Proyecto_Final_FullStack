import { useContext } from 'react';
import React from 'react';
import { GameContext } from '../context/GameContext';
import { Button, Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { carrito, increment, decrement } = useContext(GameContext);
  const total = carrito.reduce((a, producto) => a + producto.precio * producto.count, 0);

  return (
    <Container className='container_detalle mt-5'>
      <Row className='carrito_style'>
        <h4>Detalles del Pedido:</h4>
        <div className='list_style'>
          {carrito.length > 0 ? (
            carrito.map((producto, i) => (
              <Row className='flex_styleCarrito' key={i}>
                <Col className="first_style" xs={12} md={4}>
                  <Image 
                    src={producto.img_url} 
                    width="100" 
                    alt={producto.nombre} 
                    rounded 
                  />
                  <div style={{ marginTop: '10px' }}>
                    {producto.nombre}
                  </div>
                </Col>

                {/* Ajustamos la columna para alinear precio y botones en la misma fila */}
                <Col className="second_style d-flex align-items-center justify-content-center" xs={12} md={4}>
                  {/* Alineamos todo horizontalmente con flexbox */}
                  <div className="d-flex align-items-center">
                    {/* Precio alineado */}
                    <div className="me-4" style={{ fontWeight: 'bold' }}>
                      ${(producto.precio * producto.count).toLocaleString("de-DE")}
                    </div>

                    {/* Botones para incrementar y decrementar */}
                    <Button 
                      variant='danger' 
                      className="mx-2 btn-sm" 
                      onClick={() => decrement(i)}
                    >
                      -
                    </Button>
                    <span style={{ fontWeight: 'bold', margin: '0 10px' }}>
                      {producto.count}
                    </span>
                    <Button 
                      variant='primary' 
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

          <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
            Total: ${(total.toLocaleString("de-DE"))}
          </div>
          <Button variant='primary' className="mt-3">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Ir a Pagar
            </Link>
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default CartPage;


