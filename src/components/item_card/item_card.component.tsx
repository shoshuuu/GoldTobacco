import { Link } from "react-router-dom";
import "./item_card.styles.scss";

function ItemCard(props: { title: string; image: string; price: string }) {
  return (
    <div className="ItemCard">
      <div className="ItemCard__container">
        <a className="ItemCard__container__title">{props.title}</a>
        <Link to="/raw-tobaccos" className="ItemCard__container__link">
          <img src={props.image} className="ItemCard__container__image" />
        </Link>
        <p className="ItemCard__container__price">
          Цена: <b>{props.price},00 за 1 кг.</b>
        </p>
        <a className="ItemCard__container__learn_more">Подробнее</a>
      </div>
    </div>
  );
}
export default ItemCard;
