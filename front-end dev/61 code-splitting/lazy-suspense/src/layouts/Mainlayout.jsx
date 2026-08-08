import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-[250px_1fr]">
  <aside className="border-r">
    <Navbar />
  </aside>

  <main>
    <Outlet />
  </main>
</div>
  );
};

export default Mainlayout;
