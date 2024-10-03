import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

const HomePage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <div>
      <div className="banner py-5">
        <Banner />
      </div>
      <div className="cardGame">
        <Carousel productos={productos} />
      </div>
    </div>
  );
};

export default HomePage;
