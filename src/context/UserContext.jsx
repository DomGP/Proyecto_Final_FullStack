import { createContext, useContext, useState } from "react";
import { useGame } from "./GameContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("userToken");
    return { token: token ? token : null };
  });

  const { setCarrito } = useGame();

  const login = async (email, password) => {
    try {
      const response = await fetch("https://level-footing-438615-u9.wn.r.appspot.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token, nombre, apellido, email } = data;
        setUser({ token, nombre, apellido, email });
        localStorage.setItem("userToken", token);
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return { success: false, message: "Error al iniciar sesión" };
    }
  };

  const register = async (nombre, apellido, email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token, nombre, apellido, email } = data;
        setUser({ token, nombre, apellido, email });
        localStorage.setItem("userToken", token);
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      return { success: false, message: "Error al registrar usuario" };
    }
  };

  const logout = () => {
    setUser({ token: null });
    localStorage.removeItem("userToken");
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
