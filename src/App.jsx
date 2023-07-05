import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/home-page";
import ProductPage from "./routes/product-page";
import CartPage from "./routes/cart-page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product-page" element={<ProductPage />} />
        <Route exact path="/cart-page" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
