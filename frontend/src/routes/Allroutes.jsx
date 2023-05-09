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
import SingleProductPage from "../Pages/SingleProductPage.jsx";
// import { Product } from "../Admin_Page/Pages/Product.jsx";
// import { Dashboard } from "../Admin_Page/Pages/Dashboard.jsx";
import PrivateRoutes from "../components/PrivateRoutes.jsx";
import { EditButton } from "../Admin_Page/Pages/EditButton.jsx";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/homeopathy' element={<Homeopathy />}></Route> */}
        <Route path="/products/:category" element={<Homeopathy />}></Route>
        /* ====================Admin=======================*/
        <Route path="/adminlogin" element={<Adminlogin />}></Route>
        <Route path="/admin/*" element={<Admin />}></Route>
        <Route
          path="/admin/product/editButton/:id"
          element={<EditButton />}
        ></Route>
        {/* <Route path="/admin/product" element={<Product />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route> */}
        /* ====================Admin=======================*/
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoutes>
              <Checkout />
            </PrivateRoutes>
          }
        />
        <Route
          path="/orderhistory"
          element={
            <PrivateRoutes>
              <OrderHistory />
            </PrivateRoutes>
          }
        />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route
          path="/:id"
          element={
            <PrivateRoutes>
              <SingleProductPage />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
