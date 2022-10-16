import React, { useState, useEffect } from "react";
import url from "../../../package.json";
import "./checkout_form.styles.scss";
import axios from "axios";
import axiosRetry from "axios-retry";
import { WooCommerce } from "../../helpers/WooCommerceAPI";
import JWTConfig from "../../helpers/jwt";

export function CheckoutForm() {
  const [isLoading, setLoading] = useState(true);
  const [token, setToken] = useState({ token: {}, isLoaded: false });
  const [error, setError] = useState();
  const [select, setSelect] = useState();
  const [total, setTotal] = useState();

  const localCart = JSON.parse(localStorage.getItem("cart"));

  const IDarray = [];
  localCart.map((item) =>
    IDarray.push({ product_id: item.product.id, quantity: item.quantity })
  );
  console.log(IDarray);

  useEffect(() => {
    let i = 0;
    localCart.map((item) => {
      i += item.quantity * item.product.price;
    });
    setTotal(i);
    console.log(localCart);
    axios(JWTConfig())
      .then((response) => {
        setToken({ token: response.data, isLoaded: true });
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);
  /**
   * @param {Event} event
   **/
  const handleChange = (event) => {
    setSelect({ selectValue: error.target.value });
  };

  /**
   * @param {Event} event
   **/
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: false,
      billing: {
        first_name: event.target.firstName.value,
        last_name: event.target.lastName.value,
        address_1: event.target.adress.value,
        address_2: "",
        city: event.target.city.value,
        state: "",
        postcode: event.target.postcode.value,
        country: "RU",
        email: event.target.email.value,
        phone: event.target.phone.value,
      },
      shipping: {
        first_name: "ФИО: " + event.target.firstName.value,
        last_name: " " + event.target.lastName.value,
        address_1: "Адрес: " + event.target.adress.value,
        address_2: "",
        city: "Город: " + event.target.city.value,
        state: "",
        postcode: "Почтовый индекс: " + event.target.postcode.value,
        country: "RU",
      },
      line__items: IDarray,

      shipping_lines: [
        {
          method_id: event.target.select.value,
          method_title: event.target.select.value,
          total: `${total}.00`,
        },
      ],
    };

    console.log(IDarray);
    debugger;
    WooCommerce.post("orders", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

  };

  return (
    <div className="CheckoutForm">
      <h1 className="CheckoutForm__title">
        Доставка осуществляется только по России
      </h1>
      <form
        id="form"
        name="form"
        onSubmit={handleSubmit}
        className="CheckoutForm__form"
      >
        <div className="CheckoutForm__item">
          <label htmlFor="FirstName" className="CheckoutForm__label">
            Имя
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="CheckoutForm__input"
          />
        </div>

        <div className="CheckoutForm__item">
          <label htmlFor="lastName" className="CheckoutForm__label">
            Фамилия
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="CheckoutForm__input"
          />
        </div>
        <div className="CheckoutForm__item">
          <label htmlFor="city" className="CheckoutForm__label">
            Город
          </label>
          <input
            className="CheckoutForm__input"
            type="text"
            name="city"
            required
          />
        </div>
        <div className="CheckoutForm__item">
          <label htmlFor="adress" className="CheckoutForm__label">
            Адрес
          </label>
          <input
            className="CheckoutForm__input"
            type="text"
            name="adress"
            required
          />
        </div>
        <div className="CheckoutForm__item">
          <label htmlFor="postcode" className="CheckoutForm__label">
            Почтовый индекс
          </label>
          <input
            className="CheckoutForm__input"
            type="text"
            name="postcode"
            required
          />
        </div>
        <div className="CheckoutForm__item">
          <label htmlFor="email" className="CheckoutForm__label">
            Email
          </label>
          <input
            className="CheckoutForm__input"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="CheckoutForm__item">
          <label htmlFor="phone" className="CheckoutForm__label">
            Телефон
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="CheckoutForm__input"
          />
        </div>
        <div className="CheckoutForm__item">
          <label htmlFor="select" className="CheckoutForm__label">
            Доставка
          </label>
          <select className="CheckoutForm__select" name="select">
            <option value="СДЭК по предоплате">СДЭК по предоплате</option>
            <option value="Почтой наложенным платежом">
              Почтой наложенным платежом
            </option>
            <option value="Почтой по предоплате">Почтой по предоплате</option>
            <option value="Самовывоз">Самовывоз</option>
          </select>
        </div>

        <input
          className="CheckoutForm__submit"
          type="submit"
          value="Оформить заказ"
        />
      </form>
    </div>
  );
}
