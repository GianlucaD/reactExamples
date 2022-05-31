import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

ReactDOM.render(
  <React.StrictMode>
    <RegistrationForm />
    <LoginForm />
  </React.StrictMode>,
  document.getElementById("root")
);
