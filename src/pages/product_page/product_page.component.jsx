import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { addToCart } from "../../helpers/cart/addToCart";
import "./product_page.styles.scss";

export function ProductPage() {
  const [quantity, setQuantity] = useState(0);

  const location = useLocation();
  const data = location.state;
  let localCart = JSON.parse(localStorage.getItem("cart"));
  /**
   * @param {Event} event
   **/
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  // useEffect(() => {
  //   console.log(localCart);
  // }, []);

  if (data.product.categories[0].name === "Табак") {
    return (
      <div className="ProductPage">
        <h2 className="ProductPage__title">{data.product.name}</h2>

        <div className="ProductPage__container">
          <img
            src={data.product.images[0].src}
            alt={data.product.name}
            className="ProductPage__image"
          />
          <div
            className="ProductPage__container__description"
            dangerouslySetInnerHTML={{ __html: data.product.description }}
          ></div>
        </div>
        <div className="ProductPage__container" id="price">
          <p className="ProductPage__container__price">
            {data.product.price * 1000},00₽ за 1кг.
          </p>
          <p className="ProductPage__container__limit">
            Минимальное количество для заказа - 0,2 кг.
          </p>
        </div>
        <div className="ProductPage__add_to_cart">
          <label htmlFor="quantity" className="ProductPage__container__label">
            Количество{" "}
          </label>
          <input
            className="ProductPage__container__quantity"
            name="quantity"
            id="quantity"
            type="number"
            min="0.2"
            step="0.1"
            onChange={handleChange}
          />
          <a
            href=""
            className="ProductPage__container__confirm button"
            onClick={() => {
              debugger;
              console.log(data.product);
              const newcart = addToCart(
                {
                  product: data.product,
                  quantity: quantity,
                },
                localCart
              );

              console.log(newcart);
              localStorage.setItem("cart", JSON.stringify(newcart));
              console.log(localStorage.getItem("cart"));
            }}
          >
            Добавить в корзину
          </a>
        </div>
      </div>
    );
  } else
    return (
      <div className="ProductPage">
        <h2 className="ProductPage__title">{data.product.name}</h2>
        <div className="ProductPage__container">
          <img
            src={data.product.images[0].src}
            alt={data.product.name}
            className="ProductPage__image"
          />
          <div
            className="ProductPage__container__description"
            dangerouslySetInnerHTML={{ __html: data.product.description }}
          ></div>
        </div>
        <h2 className="ProductPage__container__price">
          {data.product.price},00₽ за шт.
        </h2>
        <div className="ProductPage__add_to_cart">
          <label htmlFor="quantity" className="ProductPage__container__label">
            Количество{" "}
          </label>
          <input
            className="ProductPage__container__quantity"
            name="quantity"
            id="quantity"
            type="number"
            min="1"
            step="1"
            onChange={handleChange}
          />

          <a
            href=""
            className="button"
            onClick={() => {
              const newcart = addToCart(
                {
                  product: data.product,
                  quantity: quantity,
                },
                localCart
              );
              console.log(newcart);
              localStorage.setItem("cart", JSON.stringify(newcart));
              console.log(localStorage.getItem("cart"));
            }}
          >
            Добавить в корзину
          </a>
        </div>
      </div>
    );
}

export default ProductPage;
