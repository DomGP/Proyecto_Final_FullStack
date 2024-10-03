import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardGame from "./CardGame";

const GameCarousel = ({ productos }) => {
  return (
    <Carousel>
      {productos.map((producto) => (
        <Carousel.Item key={producto.id}>
          <div className="d-flex justify-content-center">
            <CardGame showDetails={false} productos={[producto]} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default GameCarousel;
