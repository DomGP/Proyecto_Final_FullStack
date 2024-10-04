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

                <Col className="second_style text-center" xs={12} md={4}>
                  <div style={{ marginTop: '20px' }}>
                    ${(producto.precio * producto.count).toLocaleString("de-DE")}
                  </div>
                  <Button variant='danger' className="mx-2" onClick={() => decrement(i)}>
                    -
                  </Button>
                  <span style={{ fontWeight: 'bold' }}>
                    {producto.count}
                  </span>
                  <Button variant='primary' className="mx-2" onClick={() => increment(i)}>
                    +
                  </Button>
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

