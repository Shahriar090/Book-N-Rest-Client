import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import HomePage from "../pages/HomePageComponents/HomePage/HomePage";
import Register from "@/pages/Register";
import OurRooms from "@/pages/OurRooms";
import ProtectedRoute from "@/layout/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "our-rooms",
        element: (
          <ProtectedRoute>
            <OurRooms />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
