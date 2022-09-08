import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLogged = localStorage.getItem("token");
  //si el usuario hizo login permito entrar a las rutas protegidas
  if (isLogged) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
