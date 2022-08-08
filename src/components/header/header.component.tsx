import { useState } from "react";
import "./header.styles.scss";
import LightPhoneIcon from "../../miscellaneous/icons/light phone icon.svg"
import LightMailIcon from "../../miscellaneous/icons/light mail icon.svg"
import Cart from "../../miscellaneous/icons/cart.svg"

export default function Header(){
    const [total, setTotal] = useState(15000);

    return(
        <header className="header">

            {/*Логотип*/}
            <img src={require("../../miscellaneous/logo.png")} alt="logo" className="header__logo"/>
            

            {/*Название*/}
            <h1 className="header__title">Табак №1</h1>

            {/*Контакты*/}
            <div className="header__contacts">
                <div className="header__contacts__phone">
                    <img src={LightPhoneIcon} alt="Телефон" className="header__contacts__phone__icon icon"/>
                    <a href="tel: 8(931)961-00-68" className="header__contacts__phone__number">8 (931) 961-00-68</a>
                </div>
                <div className="header__contacts__mail">
                    <img src={LightMailIcon} alt="Почта" className="header__contacts__mail__icon icon"/>
                    <a className="header__contacts__mail__adress">tnomer1.2022@yandex.ru</a>
                </div>
            </div>

            {/*Корзина*/}
            <div className="header__cart">
                <a href="#"><img src={Cart} alt="Корзина" className="header__cart__icon icon"/></a>
                <p className="header__cart__total">{total},00 ₽</p>
            </div>
        </header>
    )
}