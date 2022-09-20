import "./header.styles.scss";
import LightPhoneIcon from "../../miscellaneous/icons/light phone icon.svg";
import LightMailIcon from "../../miscellaneous/icons/light mail icon.svg";
import Cart from "../../miscellaneous/icons/cart.svg";
import { Link } from "react-router-dom";

export default function Header(props: { cartValue: number }) {
  return (
    <header className="Header">
      <div className="Header__main">
        <div className="Header__main__logo">
          <img
            src={require("../../miscellaneous/logo.png")}
            alt="logo"
            className="Header__main__logo"
          />
        </div>

        <h1 className="Header__main__title">Табак №1</h1>
      </div>

      <div className="Header__contacts">
        <div className="Header__contacts__phone">
          <img
            src={LightPhoneIcon}
            alt="Телефон"
            className="Header__contacts__phone__icon icon"
          />
          <a
            href="tel: 8(931)961-00-68"
            className="Header__contacts__phone__number"
          >
            +7 (931) 961-00-68
          </a>
        </div>
        <div className="Header__contacts__mail">
          <img
            src={LightMailIcon}
            alt="Почта"
            className="Header__contacts__mail__icon icon"
          />
          <a className="Header__contacts__mail__adress">
            tnomer1.2022@yandex.ru
          </a>
        </div>
      </div>

      <div className="Header__cart">
        <Link to="/cart">
          <img src={Cart} alt="Корзина" className="Header__cart__icon " />
        </Link>
        <p className="Header__cart__total">{},00 ₽</p>
      </div>
    </header>
  );
}
