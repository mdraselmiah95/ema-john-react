import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // console.log("product API called");
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log("Products received");
      });
  }, []);

  useEffect(() => {
    // console.log("Local Storage Cart called");
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        console.log(key, savedCart[key]);
        // console.log(products);
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }

        // console.log(key, addedProduct);
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    //save to local storage (for now)
    addToDb(product.key);
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
      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
