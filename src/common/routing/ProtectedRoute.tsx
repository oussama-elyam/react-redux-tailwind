import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface Props {
  [rest: string]: any;
  children: JSX.Element;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<Props> = ({ children, allowedRoles }) => {
  const { isAuthenticated, auth } = useAuth();
  if (isAuthenticated) {
    const idx = allowedRoles.findIndex((role) => role === auth.role);
    if (auth.app_admin || idx != -1) {
      return children;
    }
    return <Navigate to={"/unauthorized"} />;
  }
  return <Navigate to={"/"} />;
};
export default ProtectedRoute;
