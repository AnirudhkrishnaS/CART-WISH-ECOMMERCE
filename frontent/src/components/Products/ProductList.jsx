import React from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="products-list-section">
      <header className="align-center products-list-header">
        <h2>Products</h2>
        <select name="sort" id="" className="products-sorting">
          <option value="">Relevence</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>
      <div className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductList;
