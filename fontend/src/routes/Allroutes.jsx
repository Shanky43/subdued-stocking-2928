import React from "react";
import { Route, Routes } from "react-router-dom";
import Homeopathy from "../Pages/Homeopathy";
import Ayurvedaproducts from "../Pages/Ayurvedaproducts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/homeopathy" element={<Homeopathy />}></Route>
        <Route path="/ayurveda" element={<Ayurvedaproducts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
