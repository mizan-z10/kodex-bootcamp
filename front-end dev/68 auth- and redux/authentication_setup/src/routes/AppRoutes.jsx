import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from '../Layouts/AuthLayout';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
const AppRoutes = () => {


let router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  }
])


  return <RouterProvider router={router} />
}
export default AppRoutes;
