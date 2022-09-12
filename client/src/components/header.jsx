// React
import React from "react";
// Router
import { Link, useLocation } from "react-router-dom";
// Styles
import { HeaderSt } from "../styles/header.styles";

const Header = () => {
  const {pathname} = useLocation()
  return(
    <HeaderSt>
      {pathname === '/' ? <Link to={"/signup"}>Sign up</Link> : null} 
      {pathname === '/signup' ? <Link to={"/"}>Login</Link> : null}
    </HeaderSt>
  )
};
export default Header;