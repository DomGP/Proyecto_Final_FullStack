import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("userToken");
    return { token: token ? token : null };
  });

  const login = (email, password) => {
    if (email === "mail@mail.com" && password === "123456") {
      const token = "fake_token_123";
      setUser({ token });
      localStorage.setItem("userToken", token);
      return { success: true };
    }
    return { success: false, message: "Credenciales incorrectas" };
  };

  const logout = () => {
    setUser({ token: null });
    localStorage.removeItem("userToken");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
