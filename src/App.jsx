import { Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//VIEWS
import HomePage from "./views/HomePage";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";

//CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
