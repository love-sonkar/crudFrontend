import React, { useEffect } from "react";
import { UseContextHook } from "./ContextHook";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ auth = true, children }) => {
  const {
    store: { user },
  } = UseContextHook();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      if (user && auth) {
        navigate(".");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthLayout;
