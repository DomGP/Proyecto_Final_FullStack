import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error al obtener juegos:", error));
  }, []);

  return (
    <GameContext.Provider value={{ games, setGames }}>
      {children}
    </GameContext.Provider>
  );
};

export default GamesProvider;
