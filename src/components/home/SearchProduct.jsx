import React from "react";
import "../styles/home-styles/searchProduct.css";
const SearchProduct = () => {
  return (
    <article className="input__container">
      <form>
        <input placeholder="What are you looking for?" type="text" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </article>
  );
};

export default SearchProduct;
