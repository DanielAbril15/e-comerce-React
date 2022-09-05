import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
import CardHome from "../home/CardHome";
import SearchProduct from "../home/SearchProduct";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.productsSlice);
  return (
    <section>
      <SearchProduct />
      <article className="products">
        {products?.map((product) => (
          <CardHome key={product.id} product={product} />
        ))}
      </article>
    </section>
  );
};

export default Home;
