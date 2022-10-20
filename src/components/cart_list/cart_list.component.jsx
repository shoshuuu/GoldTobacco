import React, { Component } from "react";
import { Link } from "react-router-dom";
import getTotal from "../../helpers/cart/getTotal";
import getTotalWeight from "../../helpers/cart/getTotalWeight";
import { CartItem } from "../cart_item/cart_item.component";
import "./cart_list.styles.scss";

export class CartList extends Component {
  render() {
    let localCart = JSON.parse(localStorage.getItem("cart"));

    if (localCart !== null && localCart.length !== 0) {
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
                  category={item.product.categories[0].name}
                  product={item}
                />
              );
            })}
          </div>
          <div className="CartList__sidebar">
            <div className="CartList__sidebar__order">
              <ul className="CartList__sidebar__order__list">
                {localCart.map((item) => {
                  if (item.product.categories[0].name === "Табак") {
                    return (
                      <li
                        className="CartList__sidebar__order__list__item"
                        key={item.product.id}
                      >
                        <div>
                          <h2 className="CartList__sidebar__order__list__item__name">
                            {item.product.name}
                          </h2>
                          <p className="CartList__sidebar__order__list__item__total">
                            {Number(item.product.price * 1000).toFixed(0) +
                              ",00₽"}{" "}
                            × {item.quantity}кг. ={" "}
                            {Number(
                              item.product.price * 1000 * item.quantity
                            ).toFixed(0) + ",00₽"}
                          </p>
                        </div>
                      </li>
                    );
                  } else
                    return (
                      <li
                        className="CartList__sidebar__order__list__item"
                        key={item.product.id}
                      >
                        <div>
                          <h2 className="CartList__sidebar__order__list__item__name">
                            {item.product.name}
                          </h2>
                          <p className="CartList__sidebar__order__list__item__total">
                            {item.product.price} × {item.quantity} шт. ={" "}
                            {item.product.price * item.quantity + ",00"}
                          </p>
                        </div>
                      </li>
                    );
                })}
              </ul>
            </div>
            <h2 className="CartList__sidebar__total">
              Общая стоимость: {getTotal(localCart).toFixed(0)},00₽
            </h2>
            <h2 className="CartList__sidebar__total">
              Общий вес табака: {getTotalWeight(localCart)}кг.
            </h2>
            <Link
              to="/checkout"
              state={{ cart: localCart }}
              className="CartList__sidebar__checkout button"
            >
              Перейти к оформлению заказа
            </Link>
          </div>
        </div>
      );
    } else return <h1 className="cart_empty">Пока что здесь пусто!</h1>;
  }
}
