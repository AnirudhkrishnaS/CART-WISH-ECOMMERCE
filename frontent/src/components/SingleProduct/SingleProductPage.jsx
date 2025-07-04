import React, { useState } from "react";
import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";

const product = {
  id: 1,
  title: "Product Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
  price: 9.99,
  images: [
    "https://placehold.co/500x500",
    "https://placehold.co/500x500",
    "https://placehold.co/500x500",
    "https://placehold.co/500x500",
    "https://placehold.co/500x500",
    "https://placehold.co/500x500",
  ],
  stock: 10,
};

const SingleProductPage = () => {
  const [selectedImage, setselectedImage] = useState(0);

  return (
    <section className="align-center single-product">
      <div className="align-center">
        <div className="single-product-thumbnails">
          {product.images.map((image, index) => (
            <img
              src={image}
              alt={product.title}
              onClick={() => {
                setselectedImage(index);
              }}
              className={selectedImage === index ? "selected-image" : ""}
            />
          ))}
        </div>
        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="single-product-display"
        />
      </div>
      <div className=" single-product-details">
        <h1 className="single-product-title">{product.title}</h1>
        <p className="single-product-description">{product.description}</p>
        <p className="single-product-price">{product.price.toFixed(2)}</p>
        <h2 className="quantity-title">Quantity:</h2>
        <div className="align-center quantity-input">
           <QuantityInput />
        </div>
        <button className="search-button add-cart">Add to cart</button>
      </div>
    </section>
  );
};

export default SingleProductPage;
