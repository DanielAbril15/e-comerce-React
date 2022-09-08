import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home-styles/searchProduct.css";
const SearchProduct = ({ products }) => {
  const navigate = useNavigate();

  //funcion que guarda el valor de lo que escribo en en el Input, recorro todos los productos, si alguno coincide con el valor, me envia a la informacion del producto
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.searchProduct.value;
    products?.map((product) => {
      if (product.title === searchValue) {
        navigate(`/product/${product.id}`);
        scroll(0, 0);
      }
    });
  };
  return (
    <article className="input__container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What are you looking for?"
          type="text"
          id="searchProduct"
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </article>
  );
};

export default SearchProduct;
