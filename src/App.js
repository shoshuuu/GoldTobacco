import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.styles.scss";
import Popup from "./components/popup/popup.component";
import Nav from "./components/nav/nav.component";
import Header from "./components/header/header.component";
import RawTobaccos from "./pages/raw_tobaccos/raw_tobaccos.component";
import Main from "./pages/main/main.component";
import Footer from "./components/footer/footer.component";
import PaymentAndShipment from "./pages/payment&shipment/payment_and_shipment.component";
import { Reviews } from "./pages/reviews/reviews.component";
import ProductPage from "./pages/product_page/product_page.component";
import Cart from "./pages/cart/cart.component";
import { Accessories } from "./pages/accessories/accessories.component";
import { CheckoutForm } from "./components/checkout_form/checkout_form";
import OrderRejected from "./components/order/order.accepted.component";
import OrderAccepted from "./components/order/order.accepted.component";
import ErrorPage from "./components/error_page/error_page.component";

export function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie")) {
      setTimeout(() => {
        setTimedPopup(true);
      }, 2000);
    }
  }, []);

  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/payment" element={<PaymentAndShipment />} />
        <Route path="/raw-tobaccos" element={<RawTobaccos />} />
        <Route path="/raw-tobaccos/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/order-accepted" element={<OrderAccepted />} />
        <Route path="/order-rejected" element={<OrderRejected />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}></Popup>
      <Footer />
    </Router>
  );
}

export default App;
