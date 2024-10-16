import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyPostsPage = () => {
    const { posts } = useContext(PostContext);

    return (
        <Container className="container_detalle mt-5 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Row className="justify-content-center">
                <Col xs={12} md={10}>
                    <h1 className="text-center">Mis Publicaciones</h1>
                    <Button as={Link} to="/create-post" className="d-block mx-auto mb-4">Crear Publicación</Button>
                    <div className="mt-4" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                        <h2 className="mb-4">Publicaciones:</h2>
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <Card key={post.id} className="mb-3">
                                    <Card.Img variant="top" src={post.img_url} />
                                    <Card.Body>
                                        <Card.Title>{post.nombre}</Card.Title>
                                        <Card.Text>{post.descripcion}</Card.Text>
                                        <Card.Text>Categoría: {post.categoria}</Card.Text>
                                        <Card.Text>Precio: ${post.precio.toLocaleString("de-DE")}</Card.Text>
                                        <Card.Text>Plataforma: {post.plataforma}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <p>No hay publicaciones disponibles.</p>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MyPostsPage;




