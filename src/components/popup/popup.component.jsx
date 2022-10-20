import React from "react";
import Cookies from "universal-cookie";
import "./popup.styles.scss";

export function Popup(props) {
  return props.trigger ? (
    <div className="Popup">
      <h2>Вам исполнилось 18 лет?</h2>
      <p>
        Сайт содержит информацию, которая не рекомендована лицам, не достигшим
        совершеннолетия. Для входа на сайт, подтвердите свой возраст.
      </p>
      <div className="Popup__inner">
        <button
          className="button"
          onClick={() => {
            props.setTrigger(false);
            const exp = 60 * 60 * 24 * 30;
            document.cookie = `IS_ADULT=Y;max-age=${exp}; SameSite=lax; Secure`;
            localStorage.setItem("cookie", JSON.stringify(document.cookie));
          }}
        >
          Мне есть 18
        </button>
        <p>
          Мы используем файлы cookie для анализа событий на нашем веб-сайте, что
          позволяет нам улучшать взаимодействие с пользователями и обслуживание.
          Продолжая просмотр страниц нашего сайта, вы принимаете условия его
          использования.
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
