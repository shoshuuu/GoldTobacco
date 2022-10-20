import React, { useState, useEffect } from "react";
import url from "../../../package.json";
import "./checkout_form.styles.scss";
import axios from "axios";
import { WooCommerce } from "../../helpers/WooCommerceAPI";
import JWTConfig from "../../helpers/jwt";
import { useNavigate } from "react-router-dom";

export function CheckoutForm() {
  const [token, setToken] = useState({ token: {}, isLoaded: false });
  const [error, setError] = useState(false);
  const [total, setTotal] = useState();

  let navigate = useNavigate();
  const localCart = JSON.parse(localStorage.getItem("cart"));

  const IDarray = [];
  localCart.map((item) => {
    console.log(item.product.categories[0].name);
    if (item.product.categories[0].name === "Табак") {
      IDarray.push({
        product_id: item.product.id,
        quantity: item.quantity * 1000,
      });
    } else {
      IDarray.push({
        product_id: item.product.id,
        quantity: item.quantity,
      });
    }
  });

  useEffect(() => {
    let i = 0;
    localCart.map((item) => {
      i += item.quantity * item.product.price;
    });
    setTotal(i);
    axios(JWTConfig())
      .then((response) => {
        setToken({ token: response.data, isLoaded: true });
      })
      .catch((error) => setError(true));
  }, []);
  /**
   * @param {Event} event
   **/
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name:
          event.target.lastName.value +
          " " +
          event.target.firstName.value +
          " " +
          event.target.fatherName.value,
        last_name: "",
        address_1: event.target.adress1.value,
        address_2: event.target.adress2.value,
        city: event.target.city.value,
        state: "",
        postcode: event.target.postcode.value,
        country: "RU",
        email: event.target.email.value,
        phone: event.target.phone.value,
      },
      shipping: {
        first_name:
          "ФИО: " +
          event.target.lastName.value +
          " " +
          event.target.firstName.value +
          " " +
          event.target.fatherName.value,
        last_name: " ",
        address_1: "Адрес: " + event.target.adress1.value,
        address_2: event.target.adress2.value,
        city: "Город: " + event.target.city.value,
        state: "",
        postcode: "Почтовый индекс: " + event.target.postcode.value,
        country: "RU",
      },
      line_items: IDarray,

      shipping_lines: [
        {
          method_id: event.target.select.value,
          method_title: event.target.select.value,
          total: `0.00`,
        },
      ],
    };

    WooCommerce.post("orders", data)
      .then((response) => {
        {
        }
      })
      .catch((error) => {
        setError(error);
      });

    if (error) {
      navigate("/order-rejected");
    } else {
      localStorage.setItem("cart", null);
      navigate("/order-accepted");
    }
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
          <label htmlFor="lastName" className="CheckoutForm__label">
            Отчество (при наличии)
          </label>
          <input
            type="text"
            name="fatherName"
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
          <label htmlFor="adress1" className="CheckoutForm__label">
            Улица
          </label>
          <input
            className="CheckoutForm__input"
            type="text"
            name="adress1"
            required
          />
          <label htmlFor="adress2" className="CheckoutForm__label">
            Дом, квартира
          </label>
          <input
            className="CheckoutForm__input"
            type="text"
            name="adress2"
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
