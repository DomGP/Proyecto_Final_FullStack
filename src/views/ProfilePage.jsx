import React, { useContext } from 'react';
import { useUser } from '../context/UserContext';
import { GameContext } from '../context/GameContext';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const { user } = useUser();
    const { carrito } = useContext(GameContext);

    return (
        <Container className="container_detalle mt-5 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <Row className="justify-content-center">
            <Col xs={12} md={10}>
            <h1 className="text-center">Perfil de Usuario</h1>
            {user.token ? (
                <>
                <div className="mb-4" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                    <h5 className="mb-3">Token de autenticación:</h5>
                    <p>{user.token}</p>
                </div>

                <div className="mt-4" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                    <h2 className="mb-4">Productos en el Carrito:</h2>
                    {carrito.length > 0 ? (
                    carrito.map((producto) => (
                        <Row key={producto.id} className="mb-3 align-items-center">
                        <Col xs={12} md={4}>
                            <Image 
                            src={producto.img_url} 
                            width="100" 
                            alt={producto.nombre} 
                            rounded 
                            />
                            <div className="mt-2">
                            <strong>{producto.nombre}</strong>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div><strong>Cantidad:</strong> {producto.count}</div>
                            <div><strong>Precio Total:</strong> ${(producto.precio * producto.count).toLocaleString("de-DE")}</div>
                        </Col>
                        </Row>
                    ))
                    ) : (
                    <p>No hay productos en el carrito.</p>
                    )}
                </div>
                </>
            ) : (
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <p className="text-center">No hay usuario autenticado</p>
                <p className="text-center">Por favor, incia sesión</p>
                <div className="d-flex justify-content-around mt-3">
                    <Button variant="primary">
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Iniciar Sesión</Link>
                    </Button>
                    <Button variant="secondary">
                    <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Registrarse</Link>
                    </Button>
                </div>
                </div>
            )}
            </Col>
        </Row>
        </Container>
    );
};

export default ProfilePage;
