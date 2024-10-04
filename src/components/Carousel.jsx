import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardGame from "./CardGame";

const GameCarousel = ({ productos }) => {

    const groupedProductos = [];
  for (let i = 0; i < productos.length; i += 2) {
    groupedProductos.push(productos.slice(i, i + 2));
  }

  return (
    <Carousel>
      {groupedProductos.map((grupo, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            <CardGame showDetails={false} productos={grupo} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default GameCarousel;
