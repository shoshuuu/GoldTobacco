import "./payment_and_shipment.styles.scss";

function PaymentAndShipment() {
  return (
    <div className="page">
      <div className="Payship">
        <h1 className="Payship__title>">ОПЛАТА И ДОСТАВКА</h1>
        <div className="dash__smaller"></div>
        <div className="dash"></div>
        <div className="Payship__rules">
          <div className="Payship__rules__rule">
            <img
              src={require("../../miscellaneous/images/person cigars.png")}
              alt="img"
            />
          </div>
          <div className="Payship__rules__rule">
            <div className="Payship__rules__rule__text">
              <h2 className="">Минимальный вес табака для заказа - 0,2 кг.</h2>
              <h2>Общая минимальная сумма заказа - 500 руб.</h2>
              <h2>Время обработки заказа с 9:00 до 17:00.</h2>
              <p>
                Ваш заказ будет принят и вы получите ответ в течении рабочего
                дня. Сборка и отправка заказа осуществляется в течение двух
                рабочих дней.
              </p>
            </div>
          </div>

          <div className="Payship__rules__rule">
            <div className="Payship__rules__rule__text">
              <h2>Условия доставки</h2>
              <p>
                Доставка Почтой России и СДЭК по тарифам почты. Расчитать цену
                по доставке возможно только после оформления заказа. <br></br>
                Не забывайте, что
                <b> наложенным платежом пересылка выходит дороже</b>, таковы
                тарифы почты России.
              </p>
            </div>
          </div>
          <div className="Payship__rules__rule">
            <div className="Payship__rules__rule__text">
              <h2>Условия оплаты</h2>
              <p>
                Мы работаем по 100% предоплате на карту или отправляем
                наложенным платежом (Почтой России). Отправка вашего заказа
                происходит в максимально быстрые сроки и доставляется согласно
                графику доставки Почты России или СДЭК.
                <br />
                <b>
                  Пожалуйста, внимательно вводите свои данные ФИО полностью,
                  адрес и номер телефона.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dash"></div>
      <div className="dash__smaller"></div>
    </div>
  );
}

export default PaymentAndShipment;
