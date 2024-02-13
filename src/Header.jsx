import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseContextHook } from "./ContextHook";

const Header = () => {
  const navigate = useNavigate();
  const {
    store: { userStatus },
    setStore,
  } = UseContextHook();
  const logout = () => {
    setStore((prev) => ({ ...prev, userStatus: false }));
    navigate("/");
  };
  return (
    <div className="w-full bg-blue-400 text-center p-2">
      <Link to="/home" className="text-2xl mr-3">
        Logo
      </Link>
      {!userStatus && (
        <>
          <Link to="/addnotes" className="text-white">
            Add Note
          </Link>
          <button className="text-white pl-3 " onClick={logout}>
            LogOut
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
