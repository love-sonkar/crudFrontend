import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-blue-400 text-center p-2">
      <Link to="/" className="text-2xl mr-3">
        Logo
      </Link>

      <Link to="/addnotes" className="text-white">
        Add Note
      </Link>
    </div>
  );
};

export default Header;
