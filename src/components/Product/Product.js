import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { name, category, stock, star, img, seller, price } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="product" />
      </div>
      <div className="product-details">
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <h5>${price}</h5>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button className="regular-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
