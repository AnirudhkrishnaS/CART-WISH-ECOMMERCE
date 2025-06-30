import React from "react";
import "./ProductCard.css";
import iphone from "../../assets/iphone.jpg";
import star from "../../assets/white-star.png"
import basket from "../../assets/basket.png"

const ProductCard = () => {
  return (
    <article className="product-card">
      <div className="product-image">
        <a href="product/1">
          <img src={iphone} alt="product-image" />
        </a>
      </div>
      <div className="product-details">
        <h3 className="product-price">$999</h3>
        <p className="product-title">iPhone 14 PRO</p>

        <footer className="align-center product-info-footer">
            <div className="align-center">
                <p className="align-center product-rating">
                    <img src={star} alt="star" /> 5.0
                </p>
                <p className="product-review-count">120</p>
            </div>
            <button className="add-to-cart">
                <img src={basket} alt="" className="basket-button" />
            </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
