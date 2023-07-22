import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main className="sharedLayout">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
