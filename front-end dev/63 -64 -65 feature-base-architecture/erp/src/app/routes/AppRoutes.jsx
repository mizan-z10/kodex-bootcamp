import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";

import LoginPage from "../../feature/auth/pages/LoginPage";
import RegisterPage from "../../feature/auth/pages/RegisterPage";
import Home from "../../feature/dashboard/page/Home";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
  const router = createBrowserRouter([
    // Public routes
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },

    // Protected routes
    {
      path: "/dashboard",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;