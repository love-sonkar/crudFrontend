import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(null);

const initialState = {
  notes: [],
  user: false,
};

const ContextHook = ({ children }) => {
  const [store, setStore] = useState(initialState);

  const fetchAllnotes = async () => {
    const response = await axios.get("http://localhost:8080/allnotes");
    setStore((prev) => ({ ...prev, notes: response.data }));
  };

  useEffect(() => {
    fetchAllnotes();
  }, [store.notes]);

  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  );
};
export default ContextHook;

export const UseContextHook = () => useContext(Context);
