import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

//COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//VIEWS
import HomePage from "./views/HomePage";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import CartPage from "./views/CartPage";
import ProfilePage from "./views/ProfilePage";
import ComodinPage from "./views/ComodinPage";

//CSS
import "./App.css";
import GamesPage from "./views/GamesPage";
import DetailPage from "./views/DetailPage";


function App() {

  return (
    
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/products" element={<GamesPage />} />
            <Route path="/*" element={<ComodinPage />} />
            <Route path="/Products/:id" element={<DetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
