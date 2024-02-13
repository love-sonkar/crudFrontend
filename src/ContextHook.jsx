import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const Context = createContext(null);

const initialState = {
  notes: [],
  user: {},
  userStatus: false,
};

const ContextHook = ({ children }) => {
  const [store, setStore] = useState(initialState);

  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  );
};
export default ContextHook;

export const UseContextHook = () => useContext(Context);
