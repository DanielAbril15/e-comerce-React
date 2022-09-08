import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";

import CardHome from "../home/CardHome";
import CategoryProduct from "../home/CategoryProduct";
import SearchProduct from "../home/SearchProduct";

const Home = () => {
  const [selectCategory, setSelectCategory] = useState("All");
  const dispatch = useDispatch();

  //traigo la informacion que tengo en mi estado global, en este caso en la llamada al endpoint de todos los productos
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  //traigo la informacion que habia guardado en el estado global
  const products = useSelector((state) => state.productsSlice);

  //funcion que guarda si la categoria coincide con el valor que habia guardado en el select
  const categoryFilter = products?.filter(
    (productCategory) => productCategory.category.name === selectCategory
  );
  //si la Categoria es diferente a All me renderiza la categoria que elegi
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

    //Por defecto me renderizan TODOS los productos
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
