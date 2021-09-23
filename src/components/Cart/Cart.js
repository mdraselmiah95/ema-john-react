import React from "react";
import "./Cart.css";
const Cart = (props) => {
  //   console.log(props.cart);
  const { cart } = props;
  const totalReducer = (previous, product) => previous + product.price;
  const total = cart.reduce(totalReducer, 0);
  //   let total = 0;
  //   for (const product of cart) {
  //     total = total + product.price;
  //   }

  const shipping = 15;
  const tax = (total + shipping) * 10;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order summary</h3>
      <h5>Items Ordered: {props.cart.length}</h5>
      <br />
      {/* <p>Total: {total.toFixed(2)}</p> */}
      <div>
        <table style={{ width: "100%" }}>
          <tr>
            <td>Items: {props.cart.length}</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Shipping & Handling:</td>
            <td>${shipping.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total before tax:</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Estimated Tax:</td>
            <td>$ {tax.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Order Total:</td>
            <td>$ {grandTotal.toFixed(2)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cart;
