import React from "react";
import "./QuantityInput.css";

const QuantityInput = () => {
  return (
    <>
      <button className="quantity-input-button" disabled>
        {" "}
        -
        {" "}
      </button>
      <p className="quantity-input-count">1</p>
      <button className="quantity-input-button">+</button>
    </>
  );
};

export default QuantityInput;
