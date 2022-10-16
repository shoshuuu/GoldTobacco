import "./nav.styles.scss";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav__item">
        <Link to={"/"} className="Nav__item__link">
          Главная
        </Link>
      </div>
      <div className="Nav__item">
        <Link to="/raw-tobaccos" className="Nav__item__link">
          Сырье табака
        </Link>
      </div>
      <div className="Nav__item">
        <Link to="/accessories" className="Nav__item__link">
          Аксессуары
        </Link>
      </div>
      <div className="Nav__item">
        <Link to="/payment" className="Nav__item__link">
          Оплата и доставка
        </Link>
      </div>
      <div className="Nav__item">
        <Link to="/reviews" className="Nav__item__link">
          Отзывы
        </Link>
      </div>
    </div>
  );
}

export default Nav;
