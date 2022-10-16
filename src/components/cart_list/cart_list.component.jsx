import React, { Component } from "react";
import { Link } from "react-router-dom";
import getTotal from "../../helpers/cart/getTotal";
import { CartItem } from "../cart_item/cart_item.component";
import "./cart_list.styles.scss";

export class CartList extends Component {
  render() {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    if (localCart.length !== 0) {
      return (
        <div className="CartList">
          <div className="CartList__container">
            {localCart.map((item) => {
              return (
                <CartItem
                  key={item.product.id}
                  id={item.product.id}
                  name={item.product.name}
                  price={item.product.price}
                  quantity={item.quantity}
                  image={item.product.images[0].src}
                  alt={item.product.name}
                  product={item}
                />
              );
            })}
          </div>
          <div className="CartList__sidebar">
            <h2 className="CartList__sidebar__total">
              Общая стоимость: {getTotal(localCart)},00₽
            </h2>
            <Link
              to="/checkout"
              state={{ cart: localCart }}
              className="CartList__sidebar__checkout"
            >
              Перейти к оформлению заказа
            </Link>
          </div>
        </div>
      );
    } else return <h1 className="cart_empty">Пока что здесь пусто!</h1>;
  }
}
