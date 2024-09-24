import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCurrentUser, userLogout } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { TErrorResponse } from "@/pages/Register";
import { CiCloudMoon, CiCloudSun } from "react-icons/ci";
import {
  getCurrentTheme,
  toggleTheme,
} from "@/redux/features/theme/themeSlice";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoutUser] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getCurrentUser);
  const theme = useAppSelector(getCurrentTheme);

  // drawer toggler
  const handleDrawerToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    const toastId = toast.loading("Logging Out", {
      duration: 3000,
      position: "top-center",
    });
    if (!currentUser?._id) {
      toast.error("User Not Logged In", {
        id: toastId,
        duration: 3000,
        position: "top-center",
      });
      return;
    }

    try {
      const validUser = { id: currentUser?._id };
      await logoutUser(validUser);
      dispatch(userLogout());
      toast.success("Logout Successful", {
        id: toastId,
        duration: 3000,
        position: "top-center",
      });
    } catch (error) {
      const err = error as TErrorResponse;
      toast.error(err?.message, {
        id: toastId,
        duration: 3000,
        position: "top-center",
      });
    }
  };

  // nav options
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Our Rooms", link: "/our-rooms" },
    { label: "About Us", link: "/about-us" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full h-20 bg-primary-color dark:bg-dark-theme fixed top-0 right-0 left-0 z-50">
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
            className={`flex flex-col md:flex-row fixed left-0 text-center md:static z-[-1] md:z-auto w-full h-auto transition-all duration-500 ease-in-out gap-6 text-primary-text text-lg font-semibold bg-primary-color md:bg-inherit py-8 md:py-0 ${
              isMobileMenuOpen ? "top-20" : "-top-[500px]"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                className="hover:text-secondary-text dark:text-primary-text transition-all duration-300"
                key={index}
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
            {/* login , sign in and other buttons for mobile view*/}
            <div className="flex justify-center gap-2 items-center md:hidden">
              <div>
                {currentUser ? (
                  <Button onClick={handleLogout} variant="secondary">
                    LogOut
                  </Button>
                ) : (
                  <Link to="/register">
                    <Button
                      variant="secondary"
                      className="px-8 py-4 text-primary-color font-semibold"
                    >
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
              <div>
                {theme === "light" ? (
                  <Button
                    onClick={() => dispatch(toggleTheme())}
                    variant="secondary"
                    className="rounded-full text-lg"
                  >
                    <CiCloudMoon />
                  </Button>
                ) : (
                  <Button
                    onClick={() => dispatch(toggleTheme())}
                    variant="secondary"
                    className="rounded-full text-lg"
                  >
                    <CiCloudSun />
                  </Button>
                )}
              </div>
            </div>
          </ul>
        </div>
        {/* login sign in and other buttons for large devices */}
        <div className="hidden md:flex items-center gap-2">
          <div>
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar title="Click Here To See Profile Details">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {`User Name : ${currentUser?.firstName} ${currentUser?.lastName}`}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {`Role : ${
                      currentUser?.isAdmin === false ? "User" : "Admin"
                    }`}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {`Email : ${currentUser?.email}`}
                  </DropdownMenuItem>
                  {/* TODO : WILL BE ADDED EDIT PROFILE FUNCTIONALITY */}
                  <DropdownMenuItem>
                    <Button variant="secondary" size="sm" className="w-full">
                      Edit Profile
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button
                      onClick={handleLogout}
                      variant="destructive"
                      size="sm"
                      className="w-full"
                    >
                      LogOut
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
          {/* theme toggling */}
          <div>
            {theme === "light" ? (
              <Button
                onClick={() => dispatch(toggleTheme())}
                variant="secondary"
                className="rounded-full text-lg"
              >
                <CiCloudMoon />
              </Button>
            ) : (
              <Button
                onClick={() => dispatch(toggleTheme())}
                variant="secondary"
                className="rounded-full text-lg"
              >
                <CiCloudSun />
              </Button>
            )}
          </div>
        </div>

        {/* small device drawer toggle icons */}
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
