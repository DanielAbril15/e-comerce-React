import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/productId.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/bundle";

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
    <section className="product-id">
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

      <article className="product-info-id">
        <p>{product.title}</p>
        <div>
          <div>
            <span>Price</span>
            <p>$ {product.price}</p>
          </div>
          <div>
            <button>-</button>
            <span></span>
            <button>+</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductId;
