import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GamesProvider from "./context/GameContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GamesProvider>
      <UserProvider>
          <App />
      </UserProvider>
      </GamesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
