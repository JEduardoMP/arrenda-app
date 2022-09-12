// React
import React, { useState } from "react";
// Router
import { useNavigate } from "react-router-dom";
// Components
import Input from "./input";
import Submit from "./submit";
// Helpers
import { loginForm } from "../helpers/loginForm";
// Cookies
import Cookies from "universal-cookie";
// Styles
import { LoginSt } from "../styles/login.styles";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const cookie = new Cookies();

  const handleData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginForm(loginData);
      if (res === undefined) {
        setError(true);
      } else {
        await cookie.set("userId", res.data.id);
        if (res.status === 202) navigate("/contacts");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginSt>
      <div className="login-title">
        <h2>Login</h2>
        <h4>Please, enter your details </h4>
      </div>
      <form onSubmit={(e) => submitLogin(e)}>
        <Input
          label={"Email"}
          type={"email"}
          name={"email"}
          onChange={handleData}
          required
        />
        <Input
          label={"Password"}
          type={"password"}
          name={"password"}
          onChange={handleData}
          required
        />
        {error ? <p>Does not match your password or email</p> : null}
        <Submit />
      </form>
    </LoginSt>
  );
};
export default Login;
