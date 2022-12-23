import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/home-styles/categoryProduct.css";

const CategoryProduct = ({ setSelectCategory }) => {
  const [category, setCategory] = useState();

  //Accedo al endPoint que guarda cuantas categorias hay en la base de datos de la tienda
  useEffect(() => {
    const URL =
      "https://e-commerce-api.academlo.tech/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategory(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  //Al cambio de categoria de productos en el select, guardo el valor en setSelectCategory para enviarlo al Home
  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };

  return (
    <div className="catecory-selector">
      <span>Category:</span>
      <select className="selector" onChange={handleChange}>
        <option value="All">All</option>
        {category?.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryProduct;
