// Router
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// Components
import Footer from "../components/footer";
import Header from "../components/header";
// Cookies
import Cookies from "universal-cookie";

const LoginSignUp = () => {
  const cookie = new Cookies();
  const userId = cookie.get("userId");
  return userId ? (
    <Navigate to={"/contacts"} />
  ) : (
    <>
      <Header />
      <div
        style={{
          background: "#fafaff",
          minHeight: "calc(100vh - 5rem)",
          paddingTop: "5rem",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default LoginSignUp;
