import { createContext, useContext, useEffect, useState } from "react";

export const GameContext = createContext();

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error al obtener juegos:", error));
  }, []);

  //FUNCION PARA CARRITO
  const addToCart = ({ id, nombre, img_url, precio}) => {
    const productoEncontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, nombre, img_url, precio, count:1 };

    if(productoEncontradoIndex >= 0) {
        carrito[productoEncontradoIndex].count++;
        setCarrito([...carrito]);
    } else {
        setCarrito([...carrito, producto]);
    }
};

const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
}

const decrement = (i) => {
    const { count } = carrito[i];
    if(count === 1){
        carrito.splice(i,1);
    }else{
        carrito[i].count--;
    }
    setCarrito([...carrito]);
}

  return (
    <GameContext.Provider value={{ games, setGames, carrito, setCarrito, addToCart, increment, decrement }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  return useContext(GameContext)
}

export default GamesProvider;
