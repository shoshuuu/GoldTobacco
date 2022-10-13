import { Link } from "react-router-dom";
import ProductPage from "../../pages/product_page/product_page.component";
import "./product.styles.scss";

export function Product(props) {
  if (props.type == "Табак") {
    return (
      <div className="Product" key={props.id}>
        <div className="Product__container">
          <h2 className="Product__container__title">{props.name}</h2>

          <Link
            to={`/raw-tobaccos/${props.id}`}
            state={{ product: props.product }}
            className="Product__container__image_container"
          >
            <img src={props.image} className="Product__container__image" />
          </Link>
          <p className="Product__container__price">
            Цена: <b>{props.price},00₽ за 1 кг.</b>
          </p>
          <Link
            to={`/raw-tobaccos/${props.id}`}
            state={{ product: props.product }}
            className="Product__container__learn_more"
          >
            Подробнее
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Product" key={props.id}>
        <div className="Product__container">
          <h2 className="Product__container__title">{props.name}</h2>
          <Link
            to={`/accessories/${props.id}`}
            state={{ product: props.product }}
            className="Product__container__image_container"
          >
            <img src={props.image} className="Product__container__image" />
          </Link>
          <p className="Product__container__price">
            Цена: <b>{props.price},00₽ за 1 кг.</b>
          </p>
          <Link
            to={`/accessories/${props.id}`}
            state={{ product: props.product }}
            className="Product__container__learn_more"
          >
            Подробнее
          </Link>
        </div>
      </div>
    );
  }
}
export default Product;
