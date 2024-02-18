import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseContextHook } from "./ContextHook";
import UserService from "./usersService";

const Header = () => {
  const navigate = useNavigate();
  const {
    store: { user, userStatus },
    setStore,
  } = UseContextHook();
  const logout = () => {
    setStore(() => ({ notes: [], user: "", userStatus: false }));
    navigate("/");
  };

  const deleteFun = async (username) => {
    console.log("click");
    try {
      const res = await UserService.deleteUser(username);
      if (res.status >= 200) {
        alert(res.data);
        logout();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full bg-blue-400 text-center p-2">
      <Link to="/home" className="text-2xl mr-3">
        Logo
      </Link>
      {userStatus && (
        <>
          <Link to="/addnotes" className="text-white">
            Add Note
          </Link>
          <button className="text-white pl-3 " onClick={logout}>
            LogOut
          </button>
          <button className="text-white pl-3 " onClick={() => deleteFun(user)}>
            Delete User
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
