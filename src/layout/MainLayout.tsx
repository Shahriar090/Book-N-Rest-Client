import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
