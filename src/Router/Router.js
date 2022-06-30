import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/HomePage";
import ProductDetails from "../Pages/ProductDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search/:keyword" element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
