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
  // Guardo el estado para que se muestre o no la ventana de Cart
  const [cartSelected, setCartSelected] = useState(false);
  //----------------------------------------------------------
  // Manejo el click: si hago click en el Cart de el navbar abro la ventana, si se hace click en componentes dentro de la ventana no se cierra y finalmente, si se hace click fuera de esta ventana, se cierra
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
        {/* Rutas que protegen el acceso a purchases y cart (si el usuario no hizo Login NO puede acceder) */}
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
