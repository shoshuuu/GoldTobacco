import React, { createContext, useState } from "react";

import Nav from "./components/nav/nav.component";
import Header from "./components/header/header.component";
import RawTobaccos from "./pages/raw_tobaccos/raw_tobaccos.component";
import Main from "./pages/main/main.component";
import Footer from "./components/footer/footer.component";
import PaymentAndShipment from "./pages/payment&shipment/payment_and_shipment.component";
import { Reviews } from "./pages/reviews/reviews.component";
import "./App.styles.scss";
import refreshToken from "./helpers/jwt";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product_page/product_page.component";
import Cart from "./pages/cart/cart.component";
import { Accessories } from "./pages/accessories/accessories.component";
import { CheckoutForm } from "./components/checkout_form/checkout_form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: []
    };
  }
  componentDidMount() {
    let localCart = localStorage.getItem("cart");

    localCart = JSON.parse(localCart);
    if (localCart) {
      this.setState({ cart: localCart });
    }
  }
  render() {
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
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
