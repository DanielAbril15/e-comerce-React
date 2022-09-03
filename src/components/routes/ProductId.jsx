import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductId = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, []);
  console.log(product);

  return (
    <div>
      {product?.productImgs.map((img) => (
        <img src={img} />
      ))}
    </div>
  );
};

export default ProductId;
