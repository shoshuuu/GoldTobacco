import React, { useState } from "react";
import { useLocation } from "react-router";
import $ from "jquery";
import "jquery-mask-plugin/dist/jquery.mask.min.js";
import { useEffect } from "react";
import { WooCommerce } from "../../helpers/WooCommerceAPI";
import refreshToken from "../../helpers/jwt";
import url from "../../../package.json";

$(function () {
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("+7(999) 999-9999");
});

export function CheckoutForm() {
  /**
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
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
        first_name: event.target.firstName.value,
        last_name: event.target.lastName.value,
        address_1: event.target.adress.value,
        address_2: "",
        city: event.target.city.value,
        state: "",
        postcode: event.target.postcode.value,
        country: "RU",
      },
      line_items: JSON.parse(localStorage.getItem("cart")),

      shipping_lines: [{}],
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbmFzdGFzZWkuYmVnZXQudGVjaCIsImlhdCI6MTY2NTQyNzIzOCwibmJmIjoxNjY1NDI3MjM4LCJleHAiOjE2NjYwMzIwMzgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.EH-QvDw83brT2WlHD4Vg6qiG2NvTLE1r1y4HpsNJ7jY"
    );

    let raw = JSON.stringify(data);
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "manual",
    };
    fetch(url.proxy + "/wp-json/wc/v2/orders", data, requestOptions)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    $("input[name=phone]").mask("+7 (000) 000-00-00", {
      placeholder: "+7 (___) ___-__-__",
    });
    $("input[name=postcode]").mask("000000");
  });

  return (
    <div className="CheckoutForm">
      <h1>ДОСТАВКА ОСУЩЕСТВЛЯЕТСЯ ТОЛЬКО ПО РОССИИ</h1>
      <form id="form" name="form" onSubmit={handleSubmit}>
        <div className="CheckoutForm_item">
          <label htmlFor="FirstName">Имя</label>
          <input type="text" name="firstName" required />
        </div>

        <div className="CheckoutForm_item">
          <label htmlFor="lastName">Фамилия</label>
          <input type="text" name="lastName" required />
        </div>
        <div className="CheckoutForm_item">
          <label htmlFor="city">Город</label>
          <input type="text" name="city" required />
        </div>
        <div className="CheckoutForm_item">
          <label htmlFor="adress">Адрес</label>
          <input type="text" name="adress" required />
        </div>
        <div className="CheckoutForm_item">
          <label htmlFor="postcode">Почтовый индекс</label>
          <input type="text" name="postcode" required />
        </div>
        <div className="CheckoutForm_item">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="CheckoutForm_item">
          <label htmlFor="phone">Телефон</label>
          <input type="tel" name="phone" id="phone" required />
        </div>
        <input type="submit" value="Оформить заказ" />

        <select>
          <option value="SDEK">СДЭК по предоплате</option>
          <option value="COD">Почтой наложенным платежом</option>
          <option value="prepayment">Почтой по предоплате</option>
          <option value="pickup">Самовывоз</option>
        </select>
      </form>
    </div>
  );
}
