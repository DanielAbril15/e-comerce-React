import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";

import CardHome from "../home/CardHome";
import CategoryProduct from "../home/CategoryProduct";
import SearchProduct from "../home/SearchProduct";

const Home = () => {
  const [selectCategory, setSelectCategory] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.productsSlice);

  const categoryFilter = products?.filter(
    (productCategory) => productCategory.category.name === selectCategory
  );

  if (selectCategory !== "All") {
    return (
      <section className="home">
        <SearchProduct products={products} />
        <CategoryProduct setSelectCategory={setSelectCategory} />
        <article className="products">
          {categoryFilter?.map((product) => (
            <CardHome key={product.id} product={product} />
          ))}
        </article>
      </section>
    );
  } else {
    return (
      <section className="home">
        <SearchProduct products={products} />
        <CategoryProduct setSelectCategory={setSelectCategory} />
        <article className="products">
          {products?.map((product) => (
            <CardHome key={product.id} product={product} />
          ))}
        </article>
      </section>
    );
  }
};

export default Home;
