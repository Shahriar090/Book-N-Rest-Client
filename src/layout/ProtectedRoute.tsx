import { getCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const accessToken = useAppSelector(getCurrentToken);
  console.log("access token from PR", accessToken);
  const location = useLocation();
  console.log("location => ", location);

  if (accessToken) return children;
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default ProtectedRoute;
