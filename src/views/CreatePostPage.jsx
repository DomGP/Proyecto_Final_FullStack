import React, { useState, useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
    const { addPost } = useContext(PostContext);
    const [nombre, setNombre] = useState(''); 
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState(''); 
    const [img_url, setImgUrl] = useState(''); 
    const [categoria, setCategoria] = useState(''); 
    const [plataforma, setPlataforma] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000);
        const newPost = { id, nombre, descripcion, img_url, categoria, precio, plataforma };
        addPost(newPost);
        navigate('/my-posts');
    };

    return (
        <Container className="container_detalle mt-5 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Row className="justify-content-center">
                <Col xs={12} md={10}>
                    <h1 className="text-center">Crear Nueva Publicación</h1>
                    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                        <Form onSubmit={handleSubmit} className="mt-4">
                            <Form.Group controlId="postNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Introduce el nombre" 
                                    value={nombre} 
                                    onChange={(e) => setNombre(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group controlId="postDescripcion" className="mt-3">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Escribe la descripción" 
                                    value={descripcion} 
                                    onChange={(e) => setDescripcion(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group controlId="postPrecio" className="mt-3">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    placeholder="Introduce el precio" 
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group controlId="postImgUrl" className="mt-3">
                                <Form.Label>Imagen URL</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Introduce la URL de la imagen" 
                                    value={img_url} 
                                    onChange={(e) => setImgUrl(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group controlId="postCategoria" className="mt-3">
                                <Form.Label>Categoría</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Introduce la categoría" 
                                    value={categoria} 
                                    onChange={(e) => setCategoria(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group controlId="postPlataforma" className="mt-3">
                                <Form.Label>Plataforma</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Introduce la plataforma" 
                                    value={plataforma} 
                                    onChange={(e) => setPlataforma(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Button type="submit" className="mt-4">Agregar Publicación</Button>
                            <Button variant="secondary" className="mt-4 ms-2" onClick={() => navigate(-1)}>
                                Volver
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CreatePostPage;




