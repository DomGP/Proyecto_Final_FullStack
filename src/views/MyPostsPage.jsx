// src/pages/MyPostsPage.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyPostsPage = () => {
    
    return (
        <Container className="mt-5 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h1 className="text-center mb-4">Mis Publicaciones</h1>
                <Alert style={{backgroundColor: 'white', border:'white'}} className="text-center">
                    <p>No tienes publicaciones aún.</p>
                    <Button as={Link} to="/create-post" variant="primary">
                        Crear nueva publicación
                    </Button>
                </Alert>
        </Container>
    );
};

export default MyPostsPage;
