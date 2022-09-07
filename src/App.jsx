import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import Home from "./components/routes/Home";
import Footer from "./components/global/Footer";
import ProductId from "./components/routes/ProductId";
import Login from "./components/routes/Login";
import Purchases from "./components/routes/Purchases";
import Cart from "./components/global/Cart";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { useState } from "react";

function App() {
  const [cartSelected, setCartSelected] = useState(false);
  const handleClickWindow = (e) => {
    if (e.target.classList.contains("fa-cart-shopping")) {
      setCartSelected(!cartSelected);
    } else if (e.target.classList.contains("cart")) {
      setCartSelected(true);
    } else {
      setCartSelected();
    }
  };

  return (
    <div onClick={handleClickWindow} className="App">
      <Header setCartSelected={setCartSelected} cartSelected={cartSelected} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductId />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
