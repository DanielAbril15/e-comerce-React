import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/home-styles/categoryProduct.css";

const CategoryProduct = ({ setSelectCategory }) => {
  const [category, setCategory] = useState();

  useEffect(() => {
    const URL =
      "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategory(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

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
