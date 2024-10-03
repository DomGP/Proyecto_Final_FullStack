import React from 'react'
import { Button, Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <Container className='container_detalle mt-5'>
      <Row className='carrito_style'>
        <h4>Detalles del Pedido:</h4>
        <div className='list_style'>
          {/* Plantilla de un solo item de carrito */}
          {/* <Row className='flex_styleCarrito'>
            <Col className="first_style" xs={6} md={4}>
              <Image 
                src="ruta_de_imagen.jpg"  // Imagen de ejemplo
                width="100" 
                alt="Nombre del producto" 
                rounded 
              />
              <div style={{ marginTop: '10px' }}>
                Nombre del Producto
              </div>
            </Col>

            <Col className="second_style text-center" xs={6} md={4} >
              <div style={{ marginTop: '20px' }}>
                $PrecioTotal
              </div>
              <Button variant='danger' className="mx-2">
                -
              </Button>
              <span style={{ fontWeight: 'bold' }}>
                Cantidad
              </span>
              <Button variant='primary' className="mx-2">
                +
              </Button>
            </Col>
          </Row> */}

          {/* Plantilla para mostrar el total y el botón de pagar */}
          <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
            Total: $0 {/* ${(total.toLocaleString("de-DE"))} */}
          </div>
          <Button variant='primary' className="mt-3">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Ir a Pagar
            </Link>
          </Button>
        </div>
      </Row>
    </Container>
  )
}

export default CartPage