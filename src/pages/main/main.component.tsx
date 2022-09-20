import React from "react";
import { Link } from "react-router-dom";
import BorderFrame from "../../components/border_frame/border_frame.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import ItemCard from "../../components/item_card/item_card.component";

import "./main.styles.scss";

function Main() {
  return (
    <div className="Main">
      <div className="page">
        <div className="Main__images">
          <img src={require("../../miscellaneous/images/pipe1.jpeg")} />
          <div className="Main__title">
            <p className="Main__title__text">
              РАЗВЕСНОЙ ТАБАК С ДОСТАВКОЙ ПО РОССИИ
            </p>
          </div>
          <img src={require("../../miscellaneous/images/pipe2.jpeg")} />
        </div>

        <div className="dash"></div>
        <div className="dash__smaller"></div>

        <div className="Main__banner">
          <img
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
          <img src={require("../../miscellaneous/images/person smoking.png")} />{" "}
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
                Доставка по России - транспортными компаниями и почтой России.
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
            <div className="gallery">
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
            </div>
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
            <div className="gallery">
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
              <ItemCard
                title="Микс американских табаков Американ бленд М2"
                image="https://www.tabaknomer1.ru/sites/default/files/styles/catalog-image/public/product-image/image-25-11-21-02-01.png?itok=JoRgUAqX"
                price="1400"
              />
            </div>
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
