import { createContext, useContext, useEffect, useState } from "react";

export const GameContext = createContext();

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [carrito, setCarrito] = useState(()=> {
    const storedCart = localStorage.getItem("carrito")
    return storedCart ? JSON.parse(storedCart) : []
  });

  useEffect(() => {
    fetch("https://level-footing-438615-u9.wn.r.appspot.com/api/products")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error al obtener juegos:", error));
  }, []);

  useEffect(()=> {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  //FUNCION PARA CARRITO
  const addToCart = ({ id, nombre, img_url, precio }) => {
    const productoEncontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, nombre, img_url, precio, count: 1 };

    if (productoEncontradoIndex >= 0) {
      carrito[productoEncontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  const clearCart = () => {
    setCarrito([]);
    localStorage.removeItem("Carrito")
  };

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        carrito,
        setCarrito,
        addToCart,
        increment,
        decrement,
        clearCart
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  return useContext(GameContext);
};

export default GamesProvider;
