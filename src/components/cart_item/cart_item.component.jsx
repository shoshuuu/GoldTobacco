import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./cart_item.styles.scss";
import deleteFromCart from "../../helpers/cart/deleteFromCart.js";

export function CartItem(props) {
  const [cart, setCart] = useState([]);
  //const [quantity, setQuantity] = useState(0);

  let localCart = localStorage.getItem("cart");
  const handleChange = (event) => {
    //setQuantity(event.target.value);
  };
  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);
  return (
    <div className="CartItem" id={props.id}>
      <h2 className="CartItem__title">{props.name}</h2>
      <div className="CartItem__container">
        <Link
          to={`/raw-tobaccos/${props.id}`}
          state={{ cart_item: props.cart_item }}
        >
          <img
            src={props.image}
            className="CartItem__container__image"
            alt={props.alt}
          />
        </Link>

        <div>
          <p className="CartItem__container__price">
            Цена: <b>{props.price},00₽</b>
          </p>
          <label htmlFor="quantity">Количество: </label>
          <input
            type="number"
            value={props.quantity}
            name="quantity"
            onChange={handleChange}
          />
          <p> Общая стоимость: {props.price * props.quantity},00₽</p>
        </div>
        <a
          className="CartItem__delete"
          href=""
          onClick={() => {
            deleteFromCart(props.product, cart, setCart);
          }}
        >
          Удалить
        </a>
      </div>
    </div>
  );
}
