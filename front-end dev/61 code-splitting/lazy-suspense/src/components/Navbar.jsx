import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-screen flex-col justify-between p-4">
      <div>
        <div className="mb-8 text-xl font-bold">Logo</div>

        <div className="flex flex-col gap-2">
          <NavLink className={({isActive}) => isActive ? "font-semibold text-shadow-lg text-red-300":""}  to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "font-semibold text-shadow-lg text-red-300":""} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "font-semibold text-shadow-lg text-red-300":""} to="/contact">Contact</NavLink>
          <NavLink className={({isActive}) => isActive ? "font-semibold text-shadow-lg text-red-300":""} to="/product">Product</NavLink>
        </div>
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;