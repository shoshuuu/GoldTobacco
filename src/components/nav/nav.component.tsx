import "./nav.styles.scss";
import Banner1 from "../../miscellaneous/banner images/banner1.jpg"

function Nav() {
    return(
        <div className="nav">
            <div className="nav__title">
                <p>Навигация</p>
            </div>
            <div className="nav__item">
                <a href="#" className="nav__item__link">Главная</a>
            </div>
            <div className="nav__item">
                <a href="#" className="nav__item__link">Сырье табака</a>
            </div>
            <div className="nav__item">
                <a href="#" className="nav__item__link">Аксессуары</a>
            </div>
            <div className="nav__item">
                <a href="#" className="nav__item__link">Оплата и доставка</a>
            </div>
            <div className="nav__item">
                <a href="#" className="nav__item__link">Отзывы</a>
            </div>
        </div>
    )
}

export default Nav;