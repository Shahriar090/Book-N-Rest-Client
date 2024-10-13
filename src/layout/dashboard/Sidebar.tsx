import { Link } from "react-router-dom";

const Sidebar = () => {
  const userSidebarItems = [
    { id: 1, label: "Dashboard", to: "/dashboard" },
    { id: 2, label: "Profile", to: "dash-profile" },
    { id: 3, label: "Your Bookings", to: "your-bookings" },
    { id: 4, label: "Your Reviews", to: "your-reviews" },
    { id: 5, label: "Payment History", to: "payment-history" },
    { id: 6, label: "Recommendations", to: "recommendations" },
  ];
  return (
    <div>
      <div className="flex justify-center py-4 border-b-2">
        <Link to="/">
          <span className="text-primary-text font-semibold text-2xl md:text-3xl text-center">
            BookNRest
          </span>
        </Link>
      </div>
      <div className="sidebar-items flex flex-col items-center gap-5 pt-4 uppercase">
        {userSidebarItems.map((item) => (
          <Link key={item.id} to={item.to}>
            <li className="text-lg">{item.label}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
