import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log("clicked");
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.key}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <h3>Order summary</h3>
      </div>
    </div>
  );
};

export default Shop;
