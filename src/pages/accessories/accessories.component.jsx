import React, { Component } from "react";
import { ProductList } from "../../components/product_list/product_list.component";

export class Accessories extends Component {
  render() {
    return (
      <div className="Accessories">
        <h2 style={{ fontSize: "4vw", margin: "3vw", textAlign: "center" }}>
          Аксессуары
        </h2>
        <ProductList type="Аксессуар" pagination={100} />
      </div>
    );
  }
}
