import React from "react";

import { ProductList } from "../../components/product_list/product_list.component";

function RawTobaccos() {
  return (
    <div className="RawTobaccos">
      <h2
        style={{
          fontSize: "4vw",
          margin: "3vw 3vw 0 3vw",
          textAlign: "center",
        }}
      >
        Сырье табака
      </h2>
      <ProductList type="Табак" pagination={100} />
    </div>
  );
}
export default RawTobaccos;
