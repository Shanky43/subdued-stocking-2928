import React from "react";
import { Route, Routes } from "react-router-dom";
import Homeopathy from "../Pages/Homeopathy.jsx";
// import Ayurvedaproducts from '../Pages/Ayurvedaproducts'
import Adminlogin from "../Admin_Page/Pages/AdminLogin";
import Admin from "../Admin_Page/Pages/Admin";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register.jsx";
import Login from "../Pages/Login.jsx";
import Cart from "../Pages/Cart.jsx";
import Checkout from "../Pages/Checkout.jsx";
import OrderHistory from "../Pages/OrderHistory.jsx";
import Thankyou from "../Pages/Thankyou.jsx";
import SingleProductPage from '../Pages/SingleProductPage.jsx'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/homeopathy' element={<Homeopathy />}></Route> */}
        <Route path="/products/:category" element={<Homeopathy />}></Route>
        <Route path="/adminlogin" element={<Adminlogin />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path='/:id' element={<SingleProductPage />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
