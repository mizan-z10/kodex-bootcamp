import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../shared/hook/UseContextData";

const ProtectedRoute = () => {
  const { logInAdmin } = useAuthContext();

  // Redirect unauthenticated users to login
  if (!logInAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;