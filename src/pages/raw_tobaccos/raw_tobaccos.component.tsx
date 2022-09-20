import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductPage from "../product_page/product_page.component";

function RawTobaccos(props: {}) {
  let { id: string } = useParams();

  return (
    <div className="RawTobaccos">
      <div className="page"></div>
    </div>
  );
}
export default RawTobaccos;
