import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { AddProduct } from "./Pages/AddProduct"


export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct/>} />
      </Routes>
      <Outlet />
    </>
  );
};