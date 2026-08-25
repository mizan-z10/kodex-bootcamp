import React from "react";

const Navbar = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white border-r border-gray-700 fixed left-0 top-0 
    ">

      {/* Header */}
      <div className="p-5 border-b border-gray-700 bg-black/20">
        <h2 className="text-xl font-semibold text-blue-400">
          🏢 ERP System
        </h2>

        <p className="text-xs text-gray-400 mt-1">
          Enterprise Resource Planning
        </p>
      </div>

      {/* Navigation Menu */}
      <ul className="py-3">

        {/* Dashboard */}
        <li className="mx-2 my-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm text-white bg-blue-500 rounded-lg transition-all hover:bg-blue-600"
          >
            <span className="w-5 h-5 mr-3 flex items-center justify-center">
              📊
            </span>

            Dashboard
          </a>
        </li>

        {/* Section Title */}
        <li className="px-5 pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Core Modules
        </li>

        {/* HR */}
        <li className="mx-2 my-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm text-gray-300 rounded-lg transition-all hover:bg-blue-500/20 hover:text-white hover:translate-x-1"
          >
            <span className="w-5 h-5 mr-3 flex items-center justify-center">
              👥
            </span>

            Human Resources
          </a>
        </li>

        {/* Finance */}
        <li className="mx-2 my-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm text-gray-300 rounded-lg transition-all hover:bg-blue-500/20 hover:text-white hover:translate-x-1"
          >
            <span className="w-5 h-5 mr-3 flex items-center justify-center">
              💰
            </span>

            Finance & Accounting
          </a>
        </li>

        {/* Inventory */}
        <li className="mx-2 my-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm text-gray-300 rounded-lg transition-all hover:bg-blue-500/20 hover:text-white hover:translate-x-1"
          >
            <span className="w-5 h-5 mr-3 flex items-center justify-center">
              📦
            </span>

            Inventory Management
          </a>
        </li>

        {/* Sales */}
        <li className="mx-2 my-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm text-gray-300 rounded-lg transition-all hover:bg-blue-500/20 hover:text-white hover:translate-x-1"
          >
            <span className="w-5 h-5 mr-3 flex items-center justify-center">
              🛒
            </span>

            Sales & Purchase
          </a>
        </li>

        {/* Divider */}
        <li className="h-px bg-gray-700 mx-5 my-2"></li>

        {/* Operations */}
        <li className="px-5 pt-2 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Operations
        </li>

        {/* Manufacturing */}
        <li className="mx-2 my-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm text-gray-300 rounded-lg transition-all hover:bg-blue-500/20 hover:text-white hover:translate-x-1"
          >
            <span className="w-5 h-5 mr-3 flex items-center justify-center">
              🏭
            </span>

            Manufacturing
          </a>
        </li>

        {/* Supply Chain */}
        <li className="mx-2 my-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm text-gray-300 rounded-lg transition-all hover:bg-blue-500/20 hover:text-white hover:translate-x-1"
          >
            <span className="w-5 h-5 mr-3 flex items-center justify-center">
              🚚
            </span>

            Supply Chain
          </a>
        </li>

        {/* Projects */}
        <li className="mx-2 my-1">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm text-gray-300 rounded-lg transition-all hover:bg-blue-500/20 hover:text-white hover:translate-x-1"
          >
            <span className="w-5 h-5 mr-3 flex items-center justify-center">
              📋
            </span>

            Project Management
          </a>
        </li>

      </ul>

      {/* User Profile */}
      <div className="absolute bottom-0 w-64 p-4 bg-black/30 border-t border-gray-700 flex items-center">

        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-semibold mr-3">
          A
        </div>

        <div>
          <h4 className="text-sm font-medium">
            Admin User
          </h4>

          <p className="text-xs text-gray-400">
            Administrator
          </p>
        </div>

      </div>

    </div>
  );
};

export default Navbar;