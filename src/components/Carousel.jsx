import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardGame from "./CardGame";

const GameCarousel = ({ productos }) => {
  return (
    <Carousel>
      {productos.map((producto) => (
        <Carousel.Item key={producto.id}>
          <CardGame showDetails={false} producto={producto} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default GameCarousel;
