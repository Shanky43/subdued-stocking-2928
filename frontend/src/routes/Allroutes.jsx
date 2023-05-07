import React from "react";
import { Route, Routes } from "react-router-dom";
import Homeopathy from "../Pages/Homeopathy";
import Ayurvedaproducts from "../Pages/Ayurvedaproducts";
import Adminlogin from "../Admin_Page/Pages/AdminLogin";
import Admin from "../Admin_Page/Pages/Admin";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Thankyou from "../Pages/Thankyou";
import OrderHistory from "../Pages/OrderHistory";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/homeopathy" element={<Homeopathy />}></Route>
        <Route path="/ayurveda" element={<Ayurvedaproducts />}></Route>
        <Route path="/adminlogin" element={<Adminlogin />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/orderhistory" element={<OrderHistory />}></Route>
        <Route path="/thankyou" element={<Thankyou />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
