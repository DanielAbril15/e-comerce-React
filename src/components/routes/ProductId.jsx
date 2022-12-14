import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/productId.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/bundle";
import { useDispatch, useSelector } from "react-redux";
import Discover from "../product/Discover";
import { getAllProducts } from "../../store/slices/products.slice";
import getConfig from "../utils/getConfig";

const ProductId = () => {
  const [product, setProduct] = useState();

  //con useParams cambio la url de forma dinamica
  const { id } = useParams();

  //Entro al endpoint que trae la informacion del producto dependiendo de la imagen a la que le di click
  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  //manejo cuantos productos quiero agregar. como minimo numero solo se acepta el 1
  const [quantity, setQuantity] = useState(1);
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinor = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //traigo todos los productos y dependiendo del producto que seleccione inicialmente(ID) traigo los productos que son de la misma categoria
  const currentCategory = product?.category;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.productsSlice);
  const categoryMatch = products?.filter(
    (productCategory) => productCategory.category.name === currentCategory
  );

  //Manejo el agregar al Cart, pero en este caso depende de la cantidad del mismo producto que el usuario quiera agregar
  const handleAddCart = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const obj = {
      id: product.id,
      quantity: quantity,
    };
    axios
      .post(URL, obj, getConfig())
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="product-id">
      <ul className="page-position">
        <p>Home</p>
        <li>
          <p>{product?.title}</p>
        </li>
      </ul>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        className="product-swiper__container"
      >
        {product?.productImgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={product.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <article className="product-id-info">
        <h3 className="">{product?.title}</h3>
        <div className="info-tobuy">
          <div className="id-info__price">
            <span>Price</span>
            <p>$ {product?.price}</p>
          </div>
          <div className="id-info__quantity">
            <span>Quantity</span>
            <div className="quantity__buttons">
              <button onClick={handleMinor}>-</button>
              <span>{quantity}</span>
              <button onClick={handlePlus}>+</button>
            </div>
          </div>
        </div>
        <button onClick={handleAddCart} className="btn-id-cart">
          Add to cart
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <p className="product-id__description">{product?.description}</p>
      </article>
      <article className="discover">
        <h4>Discover similar items</h4>
        <div className="cards-discover__container">
          {categoryMatch?.map((product) => (
            <Discover key={product.id} product={product} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default ProductId;
