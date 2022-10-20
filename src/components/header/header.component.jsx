import "./header.styles.scss";
import LightPhoneIcon from "../../miscellaneous/icons/light phone icon.svg";
import LightMailIcon from "../../miscellaneous/icons/light mail icon.svg";
import Cart from "../../miscellaneous/icons/cart.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "../../pages/main/main.component";
import getTotal from "../../helpers/cart/getTotal";

export default function Header() {
  // const [cart, setCart] = useState([{}]);
  const [total, setTotal] = useState(null);
  const [sum, setSum] = useState(0);

  let localCart;

  useEffect(() => {
    localCart = JSON.parse(localStorage.getItem("cart"));
    setSum(getTotal(localCart));
    checkIfCartNull();
  }, [sum]);

  function checkIfCartNull() {
    if (localCart == null) {
      setTotal(<p className="Header__cart__total">0,00 ₽</p>);
    } else setTotal(<p className="Header__cart__total">{sum},00 ₽</p>);
  }

  return (
    <header className="Header">
      <div className="Header__main">
        <div className="Header__main__logo">
          <Link to="/" element={<Main />}>
            <img
              src={require("../../miscellaneous/logo.png")}
              alt="logo"
              className="Header__main__logo"
            />
          </Link>
        </div>

        <h1 className="Header__main__title">Золотая Табакерка</h1>
      </div>

      <div className="Header__contacts">
        <div className="Header__contacts__phone">
          <img
            src={LightPhoneIcon}
            alt="Телефон"
            className="Header__contacts__phone__icon icon"
          />
          <a
            href="tel: 8 (920) 900-90-94"
            className="Header__contacts__phone__number"
          >
            +7 (920) 900-90-94
          </a>
        </div>
        <div className="Header__contacts__mail">
          <img
            src={LightMailIcon}
            alt="Почта"
            className="Header__contacts__mail__icon icon"
          />
          <a className="Header__contacts__mail__adress">
            Nastasystasyfox@yandex.ru
          </a>
        </div>
      </div>

      <div className="Header__cart">
        <Link to="/cart">
          <img src={Cart} alt="Корзина" className="Header__cart__icon " />
        </Link>
        {total}
      </div>
    </header>
  );
}
