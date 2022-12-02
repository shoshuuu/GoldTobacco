import { Link } from "react-router-dom";
import "./product.styles.scss";

export function Product(props) {
  if (props.type === "Табак") {
    if (props.isInStock === "outofstock") {
      return (
        <div className="Product dim" key={props.id}>
          <div className="Product__container">
            <h2 className="Product__container__title">{props.name}</h2>

            <Link className="Product__container__image_container">
              <img
                title={props.name}
                alt={props.name}
                src={props.image}
                className="Product__container__image"
              />
            </Link>
            <p className="Product__container__price">
              Цена: <b>{props.price * 1000},00₽ за 1 кг.</b>
            </p>
            <Link className="Product__container__learn__more button">
              Нет в наличии
            </Link>
          </div>
        </div>
      );
    } else
      return (
        <div className="Product" key={props.id}>
          <div className="Product__container">
            <h2 className="Product__container__title">{props.name}</h2>

            <Link
              to={`/raw-tobaccos/${props.id}`}
              state={{ product: props.product }}
              className="Product__container__image_container"
            >
              <img
                title={props.name}
                alt={props.name}
                src={props.image}
                className="Product__container__image"
              />
            </Link>
            <p className="Product__container__price">
              Цена: <b>{props.price * 1000},00₽ за 1 кг.</b>
            </p>
            <Link
              to={`/raw-tobaccos/:${props.id}`}
              state={{ product: props.product }}
              className="Product__container__learn__more button"
            >
              Подробнее
            </Link>
          </div>
        </div>
      );
  } else {
    if (props.isInStock === "outofstock") {
      return (
        <div className="Product dim" key={props.id}>
          <div className="Product__container">
            <h2 className="Product__container__title">{props.name}</h2>
            <Link className="Product__container__image_container">
              <img
                title={props.name}
                alt={props.name}
                src={props.image}
                className="Product__container__image"
              />
            </Link>
            <p className="Product__container__price">
              Цена: <b>{props.price},00₽</b>
            </p>
            <Link className="Product__container__learn__more button">
              Нет в наличии
            </Link>
          </div>
        </div>
      );
    } else
      return (
        <div className="Product" key={props.id}>
          <div className="Product__container">
            <h2 className="Product__container__title">{props.name}</h2>
            <Link
              to={`/accessories/:${props.id}`}
              state={{ product: props.product }}
              className="Product__container__image_container"
            >
              <img
                title={props.name}
                alt={props.name}
                src={props.image}
                className="Product__container__image"
              />
            </Link>
            <p className="Product__container__price">
              Цена: <b>{props.price},00₽</b>
            </p>
            <Link
              to={`/accessories/${props.id}`}
              state={{ product: props.product }}
              className="Product__container__learn__more button"
            >
              Подробнее
            </Link>
          </div>
        </div>
      );
  }
}
export default Product;
