import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Product } from "../Pages/Product";
import { Dashboard } from "../Pages/Dashboard";
import { AddProduct } from "../Pages/AddProduct";
import EditButton from "./EditButton";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<AddProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Outlet />
    </>
  );
};