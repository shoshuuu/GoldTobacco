import Product from "../product/product.component";
import { WooCommerce } from "../../helpers/WooCommerceAPI";
import "./product_list.styles.scss";
import React, { Component } from "react";

/**
 * @param {Array} arr - the array being filtered
 * @param {String} type - value of the type being sought
 * @returns array filtered by type
 */
export function getProductsOfType(arr, type) {
  return arr.filter((el) => el?.categories[0]?.name === type);
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
      .finally(() => {
        return true;
      });
  }

  render() {
    //НА ВСЕХ ТОВАРАХ ДОЛЖНА БЫТЬ КАРТИНКА
    if (this.state.isLoaded) {
      if (this.state.products === undefined) {
        return <div className="loading">Товары загружаются...</div>;
      } else {
        let products_array = getProductsOfType(
          this.state.products,
          this.props.type
        );
        if (products_array.length === 0) {
          return (
            <div className="ProductList">
              <h2 style={{ textAlign: "center" }}>Пока что товаров нет!</h2>
            </div>
          );
        } else
          return (
            <div className="ProductList">
              <div className="gallery">
                {products_array.map((product) => {
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
                        isInStock={product.stock_status}
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
