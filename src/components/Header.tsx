import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCurrentUser, userLogout } from "@/redux/features/auth/authSlice";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getCurrentUser);
  const handleDrawerToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  // nav options
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Our Rooms", link: "/our-rooms" },
    { label: "About Us", link: "/about-us" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full h-20 bg-primary-color fixed top-0 right-0 left-0 z-50">
      <nav className="w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-2">
        {/* logo */}
        <div className="logo">
          <Link to="/">
            <span className="text-primary-text font-semibold text-2xl md:text-3xl">
              BookNRest
            </span>
          </Link>
        </div>
        {/* nav options */}
        <div>
          <ul
            className={`flex flex-col md:flex-row fixed left-0 text-center md:static z-[-1] md:z-auto w-full h-auto transition-all duration-500 ease-in-out gap-6 text-primary-text text-lg font-semibold bg-primary-color py-8 md:py-0 ${
              isMobileMenuOpen ? "top-20" : "-top-[500px]"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                className="hover:text-secondary-text transition-all duration-300"
                key={index}
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}

            <div className="md:hidden">
              <Link to="/register">
                <Button
                  variant="secondary"
                  className="px-8 py-4 text-primary-color font-semibold"
                >
                  Sign In
                </Button>
              </Link>
              <Button onClick={handleLogout}>LogOut</Button>
            </div>
          </ul>
        </div>
        <div className="btn hidden md:block">
          {currentUser ? (
            <Button variant="secondary" onClick={handleLogout}>
              LogOut
            </Button>
          ) : (
            <Link to="/register">
              <Button
                variant="secondary"
                className="px-8 py-4 text-primary-color font-semibold"
              >
                Sign Up
              </Button>
            </Link>
          )}
        </div>

        {/* for small device */}
        <div className="md:hidden">
          <button
            className="text-2xl text-primary-text"
            onClick={handleDrawerToggle}
          >
            {isMobileMenuOpen ? (
              <span>
                <MdClose />
              </span>
            ) : (
              <span>
                <MdMenu />
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
