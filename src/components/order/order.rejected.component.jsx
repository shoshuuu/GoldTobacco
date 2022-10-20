import "./order.styles.scss";

export default function OrderRejected() {
  return (
    <div className="OrderRejected">
      <h2>Заказ не был оформлен</h2>
      <p>Проблема может быть:</p>
      <ul>
        <li>В ошибке сервера</li>
        <li>В неправильно введенных данных</li>
      </ul>
      <br></br>
      <p>Попробуйте оформить заказ еще раз.</p>
    </div>
  );
}
