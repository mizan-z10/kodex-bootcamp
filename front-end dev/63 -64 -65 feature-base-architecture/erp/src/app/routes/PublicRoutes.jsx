import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../shared/hook/UseContextData";

const PublicRoutes = () => {
  const { logInAdmin } = useAuthContext();

  // Prevent authenticated users from accessing login/register pages
  if (logInAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;