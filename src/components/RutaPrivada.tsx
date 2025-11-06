import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const RutaPrivada: React.FC = () => {
  const { user } = useAuthContext();

  if (user == undefined) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RutaPrivada;
