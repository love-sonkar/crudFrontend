import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="h-screen">
        <Outlet />
      </main>
      <footer>
        <div className="w-full bg-blue-400 text-center p-2">
          <p className="text-sm">Love Sonkar © 2024</p>
        </div>
      </footer>
    </>
  );
};

export default App;
