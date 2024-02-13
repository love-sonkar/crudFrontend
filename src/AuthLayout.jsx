import React, { useEffect } from "react";
import { UseContextHook } from "./ContextHook";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ auth = true, children }) => {
  const {
    store: { userStatus },
  } = UseContextHook();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth && userStatus !== auth) {
      navigate("/");
    } else if (userStatus && auth == userStatus) {
      navigate(".");
    }
  }, [userStatus, navigate]);

  return <>{children}</>;
};

export default AuthLayout;
