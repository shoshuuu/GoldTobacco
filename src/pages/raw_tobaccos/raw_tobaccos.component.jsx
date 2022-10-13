import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../../components/product_list/product_list.component";
import ProductPage from "../product_page/product_page.component";

function RawTobaccos() {
  return (
    <div className="RawTobaccos">
      <h2 style={{ "font-size": "4vw", margin: "3vw", textAlign: "center" }}>
        Сырье табака
      </h2>
      <ProductList type="Табак" pagination={100} />
    </div>
  );
}
export default RawTobaccos;
