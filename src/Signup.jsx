import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseContextHook } from "./ContextHook";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const { setStore } = UseContextHook();

  const userNameRef = useRef();
  const passwordRef = useRef();

  const submitfunction = async (e) => {
    e.preventDefault();

    const data = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await axios.post("http://localhost:8080/signup", data);

      if (res.status == 200) {
        setStore((prev) => ({ ...prev, user: res.data, userStatus: true }));
        navigate("/home");
      }
    } catch (e) {
      alert(e.response.data);
    }
    userNameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="grid place-items-center h-full">
      <form onSubmit={submitfunction} className="max-w-sm mx-auto">
        <h2>Signup</h2>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your username
          </label>
          <input
            ref={userNameRef}
            type="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  00"
            placeholder="username"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Register
        </button>
        <div className="flex">
          <h2>Have a account </h2>
          <Link to="/" className="pl-2 underline text-blue-400">
            login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
