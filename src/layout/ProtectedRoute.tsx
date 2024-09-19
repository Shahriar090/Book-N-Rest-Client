import { getCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const accessToken = useAppSelector(getCurrentToken);
  const location = useLocation();

  if (accessToken) return children;
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default ProtectedRoute;
