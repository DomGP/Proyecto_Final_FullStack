import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
    const location = useLocation();
    const { trackingNumber } = location.state || { trackingNumber: 'N/A' };

    return (
        <div className="container my-5 text-center" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px' }}>
            <h2 className="h4">¡Gracias por tu compra!</h2>
            <p>Tu pedido ha sido procesado con éxito.</p>
            <p>
                Tu número de seguimiento es: <strong>{trackingNumber}</strong>
            </p>
            <p>Recibirás un correo de confirmación con los detalles de tu pedido.</p>
        </div>
    );
};

export default ConfirmationPage;

