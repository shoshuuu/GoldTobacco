import "./cart.styles.scss";

import React, { Component } from "react";
import { CartList } from "../../components/cart_list/cart_list.component";
import "./cart.styles.scss";

export class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <h2 style={{ "font-size": "4vw", margin: "3vw", textAlign: "center" }}>
          Корзина
        </h2>
        <CartList />
      </div>
    );
  }
}
export default Cart;
