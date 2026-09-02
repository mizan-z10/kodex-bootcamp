import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
      
      <div className="text-xl font-bold">
        Logo
      </div>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          shop
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          Cart
        </NavLink>
      </div>

      <div>
        <button className="bg-blue-500 px-4 py-2 rounded">
          Sign Up
        </button>
      </div>

    </div>
  )
}

export default Navbar