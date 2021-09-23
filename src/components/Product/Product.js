import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { name, category, stock, star, img, seller, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="product" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>
          <small>by:{seller}</small>
        </p>
        <h5>${price}</h5>
      </div>
    </div>
  );
};

export default Product;
