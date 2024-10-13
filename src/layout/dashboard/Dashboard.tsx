import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen gap-0 md:gap-3">
      <div className="bg-primary-color col-span-2">
        <Sidebar />
      </div>
      <div className="bg-primary-text col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
