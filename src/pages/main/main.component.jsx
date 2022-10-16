import React from "react";
import { Link } from "react-router-dom";
import BorderFrame from "../../components/border_frame/border_frame.component";
import { ProductList } from "../../components/product_list/product_list.component";

import "./main.styles.scss";

function Main() {
  return (
    <div className="Main">
      <div className="page">
        <div className="Main__images">
          <img alt="" src={require("../../miscellaneous/images/pipe1.jpeg")} />
          <div className="Main__title">
            <p className="Main__title__text">
              РАЗВЕСНОЙ ТАБАК С ДОСТАВКОЙ ПО РОССИИ
            </p>
          </div>
          <img alt="" src={require("../../miscellaneous/images/pipe2.jpeg")} />
        </div>

        <div className="dash"></div>
        <div className="dash__smaller"></div>

        <div className="Main__banner">
          <img
            alt=""
            src={require("../../miscellaneous/banner images/banner4.png")}
            className="Main__banner__image"
          />
          <div className="Main__banner__text">
            <BorderFrame
              child={
                <p
                  style={{
                    textAlign: "center",
                    padding: "2vw 0px",
                    fontSize: "2.5vw",
                  }}
                >
                  Мы предлагаем купить недорогой развесной табак из Америки,
                  Бразилии, Индии, Аргентины, Кубы и других стран. В наличии
                  есть сорта Берли, Вирджиния, Ориентал, готовые фабричные
                  мешки.
                </p>
              }
            ></BorderFrame>
          </div>
        </div>

        <div className="Main__lookup">
          <img
            alt=""
            src={require("../../miscellaneous/images/person smoking.png")}
          />{" "}
          <div className="Main__lookup__details">
            <h2>
              Весь ассортимент смотрите в разделах{" "}
              <Link to="/raw-tobaccos" className="link-button">
                сырье табака
              </Link>{" "}
              и
              <Link to="/accessories" className="link-button">
                {" "}
                аксессуары
              </Link>
            </h2>
            <ul>
              <li>
                Доставка по России - транспортными компаниями, почтой России и
                самовывозом.
              </li>
              <li>Минимальный вес табака для заказа 0,2 кг.</li>
              <li>Общая минимальная сумма заказа 500 руб.</li>
            </ul>
          </div>
        </div>

        <div className="Main__popular">
          <div className="dash__smaller"></div>
          <div className="dash"></div>
          <h2>Популярные товары</h2>
          <div className="dash"></div>
          <div className="dash__smaller"></div>
          <div className="Main__popular__tobaccos">
            <ProductList type="Табак" pagination={10} />
            <Link to="/raw-tobaccos" className="button">
              Смотреть все товары
            </Link>
          </div>
          <div className="dash"></div>
          <div className="dash__smaller"></div>
          <h2>Популярные аксессуары</h2>
          <div className="dash__smaller"></div>
          <div className="dash"></div>
          <div className="Main__popular__accessories">
            <ProductList type="Аксессуар" pagination={10} />
            <Link to="/accessories" className="button">
              Смотреть все товары
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
