import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/home-page";
import ProductPage from "./routes/product-page";
import CartPage from "./routes/cart-page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SharedLayout from "./routes/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route exact path="/product-page" element={<ProductPage />} />
          <Route exact path="/cart-page" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
