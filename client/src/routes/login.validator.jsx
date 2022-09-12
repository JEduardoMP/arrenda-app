// React
import React from "react";
// Router
import { Outlet, Navigate } from "react-router-dom";
// Cookies
import Cookies from "universal-cookie";
const RouteValidator = () => {
  const cookie = new Cookies();
  const userId = cookie.get("userId");
  return userId ? <Outlet /> : <Navigate to={"/rechazado"} />;
};
export default RouteValidator;
