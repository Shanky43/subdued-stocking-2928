import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  } else if (token && token == "QpwL5tke4Pnpja7X4") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoutes;
