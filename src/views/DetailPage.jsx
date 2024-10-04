import React, { useContext } from 'react';
import HorizontalCard from '../components/Card';
import { useParams } from 'react-router-dom';
import { GameContext } from '../context/GameContext';

const DetailPage = () => {
    const { id } = useParams();
    const { games } = useContext(GameContext);
    const producto = games.find((game) => game.id === parseInt(id));

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <>
            <h2 className='mt-3 text-center'>GameStore</h2>
            <HorizontalCard showDetails={true} productos={[producto]} />
        </>
    );
};

export default DetailPage;
