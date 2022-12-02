import { React } from "react";
import { Link } from "react-router-dom";

import "./cart_item.styles.scss";
import deleteFromCart from "../../helpers/cart/deleteFromCart.js";
export function CartItem(props) {
  let localCart = JSON.parse(localStorage.getItem("cart"));

  // useEffect(() => {
  //   localCart = JSON.parse(JSON.stringify(localCart));
  // }, []);

  if (props.category === "Табак") {
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

          <div className="CartItem__container">
            <div className="CartItem__container__price">
              <p>Цена:</p> <b>{props.price * 1000},00₽</b> <p>за 1кг.</p>
            </div>

            <div className="CartItem__container__quantity">
              <label htmlFor="quantity">Количество: </label>
              <input
                type="number"
                placeholder={props.quantity}
                step={0.1}
                min={0.2}
                name="quantity"
              />
            </div>
          </div>

          <div className="CartItem__container">
            <div className="CartItem__container__total">
              <p>Общая стоимость:</p>{" "}
              <div className="CartItem__container__total__price">
                <p>
                  {Number(props.price * 1000 * props.quantity).toFixed(0)},00₽
                </p>
              </div>
            </div>
          </div>
          <a
            className="CartItem__delete"
            href=""
            onClick={() => {
              const newcart = deleteFromCart(props.product, localCart);
              console.log(newcart);

              if (newcart == null) {
                localStorage.setItem("cart", null);
              } else {
                localStorage.setItem("cart", JSON.stringify(newcart));
              }
              console.log(localStorage.getItem("cart"));
            }}
          >
            Удалить
          </a>
        </div>
      </div>
    );
  } else
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

          <div className="CartItem__container">
            <div className="CartItem__container__price">
              <p>Цена:</p> <b>{props.price},00₽</b> <p>за 1кг.</p>
            </div>

            <div className="CartItem__container__quantity">
              <label htmlFor="quantity">Количество: </label>
              <input
                type="number"
                placeholder={props.quantity}
                step={0.1}
                min={0.5}
                name="quantity"
              />
            </div>
          </div>

          <div className="CartItem__container">
            <div className="CartItem__container__total">
              <p>Общая стоимость:</p>{" "}
              <div className="CartItem__container__total__price">
                <p>{props.price * props.quantity},00₽</p>
              </div>
            </div>
          </div>
          <a
            className="CartItem__delete"
            href=""
            onClick={() => {
              const newcart = deleteFromCart(props.product, localCart);
              console.log(newcart);

              if (newcart == null) {
                localStorage.setItem("cart", null);
              } else {
                localStorage.setItem("cart", JSON.stringify(newcart));
              }
              console.log(localStorage.getItem("cart"));
            }}
          >
            Удалить
          </a>
        </div>
      </div>
    );
}
