import Product from "../product/product.component";
import { WooCommerce } from "../../helpers/WooCommerceAPI";
import "./product_list.styles.scss";
import React, { Component } from "react";

/**
 * @param {Array} arr - the array being filtered
 * @param {String} type - value of the type being sought
 * @returns array filtered by type
 */
export function getProductsOfType(array, type) {
  return array.filter((el) => el.categories[0].name === type);
}
export class ProductList extends Component {
  state = {
    products: [],
    isLoaded: false,
  };
  componentDidMount() {
    WooCommerce.get("products", {
      per_page: this.props.pagination,
    })
      .then((response) => {
        this.setState({
          products: response.data,
          isLoaded: true,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }

  render() {
    //НА ВСЕХ ТОВАРАХ ДОЛЖНА БЫТЬ КАРТИНКА
    if (this.state.isLoaded) {
      if (this.state.products === undefined) {
        return <div className="loading">Товары загружаются...</div>;
      } else {
        let tobaccos_array = getProductsOfType(
          this.state.products,
          this.props.type
        );
        return (
          <div className="ProductList">
            <div className="gallery">
              {tobaccos_array.map((product) => {
                if (product.images === undefined) {
                  return <div key={product.id}></div>;
                } else {
                  return (
                    <Product
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      type={this.props.type}
                      image={product.images[0].src}
                      product={product}
                      alt={product.name}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      }
    } else {
      return <div className="loading">Товары загружаются...</div>;
    }
  }
}
