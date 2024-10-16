import React from "react";
import CardGame from "../components/CardGame";

const GamesPage = () => {
  return (
    <>
      <h2 className="text-center mt-2">Catálogo de Juegos</h2>
      <CardGame showDetails={false} />
    </>
  );
};

export default GamesPage;
