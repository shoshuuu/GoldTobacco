import React from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import ItemCard from "../../components/item_card/item_card.component";

import "./main.styles.scss";

function Main() {
  return (
    <div className="Main">
      <div className="page">
        <div className="Main__title">
          <div className="Main__title__text">
            РАЗВЕСНОЙ ТАБАК С ДОСТАВКОЙ ПО РОССИИ
          </div>
        </div>
        <div className="dash 1"></div>
        <div className="Main__info">
          <p>
            Мы предлагаем купить недорогой развесной табак из Америки, Бразилии,
            Индии, Аргентины, Кубы и других стран. В наличии есть сорта Берли,
            Вирджиния, Ориентал, готовые фабричные мешки.
          </p>
          <ul>
            <li>
              Доставка по России - транспортными компаниями и почтой России.
            </li>
            <li>Минимальный вес табака для заказа 0,2 кг.</li>
            <li>Общая минимальная сумма заказа 500 руб.</li>
          </ul>
          <div className="Main__info__images">
            <img src={require("../../miscellaneous/images/pipe1.jpeg")} />
            <img src={require("../../miscellaneous/images/pipe2.jpeg")} />
          </div>
        </div>

        <div className="Main__lookup">
          <h2>
            Весь ассортимент смотрите в разделах <a>сырье табака</a> и
            <a> аксессуары</a>
          </h2>
          <img src={require("../../miscellaneous/images/person smoking.png")} />{" "}
        </div>
      </div>
      <div className="Main__popular">
        <h2>Популярные товары</h2>
        <div className="Main__popular__tobaccos">
          <a className="button">Смотреть все товары</a>
        </div>
        <h2>Популярные аксессуары</h2>
        <div className="Main__popular__accessories">
          <a className="button">Смотреть все товары</a>
        </div>
      </div>
    </div>
  );
}

export default Main;
