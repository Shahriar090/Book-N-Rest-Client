import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import HomePage from "../pages/HomePageComponents/HomePage/HomePage";
import Register from "@/pages/HomePageComponents/Register";

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
    ],
  },
]);
