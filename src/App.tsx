import React from "react";

import Nav from "./components/nav/nav.component";
import Header from "./components/header/header.component";
import RawTobaccos from "./pages/raw_tobaccos/raw_tobaccos.component";
import Main from "./pages/main/main.component";
import Footer from "./components/footer/footer.component";
import PaymentAndShipment from "./pages/payment&shipment/payment_and_shipment.component";
import "./App.styles.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/payment" element={<PaymentAndShipment />} />
        <Route path="/raw-tobaccos" element={<RawTobaccos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
