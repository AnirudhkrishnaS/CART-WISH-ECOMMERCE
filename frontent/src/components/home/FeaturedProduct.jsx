import React from "react";
import "./FeaturedProduct.css";
import ProductCard from "../Products/ProductCard";

const FeaturedProduct = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>

      <div className="featured-product-list align-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FeaturedProduct;
