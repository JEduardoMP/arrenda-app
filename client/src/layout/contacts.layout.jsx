// Router
import React from "react";
import { Outlet } from "react-router-dom";
// Components
import Footer from "../components/footer";
import Header from "../components/header";

const ContactsLayout = () => {
  return (
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
export default ContactsLayout;
