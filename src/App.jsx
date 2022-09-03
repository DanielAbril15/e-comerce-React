import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import Home from "./components/routes/Home";
import Footer from "./components/global/Footer";
import ProductId from "./components/routes/ProductId";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductId />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
