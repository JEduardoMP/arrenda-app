// React
import React from "react";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Login from "./components/login";
import SignUp from "./components/sugnup";
import Contacts from "./components/contacts";
// Routes
import RouteValidator from "./routes/login.validator";
// Layout
import LoginSignUp from "./layout/login-signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp />} >
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/contacts" element={<RouteValidator />} >
          <Route index element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
