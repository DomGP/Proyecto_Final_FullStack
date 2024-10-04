import React, { useContext } from 'react';
import { useUser } from '../context/UserContext';
import { GameContext } from '../context/GameContext';

const ProfilePage = () => {
    const { user } = useUser();
    const { carrito } = useContext(GameContext);

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            {user.token ? (
                <>
                    <p>Token: {user.token}</p>
                    <h2>Productos en el Carrito:</h2>
                    {carrito.length > 0 ? (
                        <ul>
                            {carrito.map((producto) => (
                                <li key={producto.id}>
                                    {producto.nombre} - Cantidad: {producto.count}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay productos en el carrito.</p>
                    )}
                </>
            ) : (
                <p>No hay usuario autenticado.</p>
            )}
        </div>
    );
};

export default ProfilePage;
