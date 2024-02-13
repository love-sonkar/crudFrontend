import React from "react";
import { useNavigate } from "react-router-dom";
import { UseContextHook } from "./ContextHook";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      LoginPage
      <button onClick={() => navigate("/home")}>Home</button>
    </div>
  );
};

export default LoginPage;
