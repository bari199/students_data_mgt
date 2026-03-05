import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const isAuth = localStorage.getItem("isAuth");

  return isAuth === "true"
    ? <Outlet />
    : <Navigate to="/login" replace />;
};

export default ProtectedRoute;