import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import UserInfo from "./UserInfo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // drawer toggler
  const handleDrawerToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // const handleLogout = async () => {
  //   const toastId = toast.loading("Logging Out", {
  //     duration: 3000,
  //     position: "top-center",
  //   });
  //   if (!currentUser?._id) {
  //     toast.error("User Not Logged In", {
  //       id: toastId,
  //       duration: 3000,
  //       position: "top-center",
  //     });
  //     return;
  //   }

  //   try {
  //     const validUser = { id: currentUser?._id };
  //     await logoutUser(validUser);
  //     dispatch(userLogout());
  //     toast.success("Logout Successful", {
  //       id: toastId,
  //       duration: 3000,
  //       position: "top-center",
  //     });
  //   } catch (error) {
  //     const err = error as TErrorResponse;
  //     toast.error(err?.message, {
  //       id: toastId,
  //       duration: 3000,
  //       position: "top-center",
  //     });
  //   }
  // };

  // nav options
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Our Rooms", link: "/our-rooms" },
    { label: "About Us", link: "/about-us" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full h-20 bg-primary-color dark:bg-dark-theme dark:shadow-md fixed top-0 right-0 left-0 z-50 ">
      <nav className="w-full h-full max-w-screen-xl mx-auto px-2 flex items-center justify-between">
        {/* logo */}
        <div>
          <Link to="/">
            <span className="text-primary-text font-semibold text-2xl md:text-3xl">
              BookNRest
            </span>
          </Link>
        </div>
        {/* nav options */}
        <div>
          <ul
            className={`flex flex-col md:flex-row fixed left-0 text-center md:static z-[-1] md:z-auto w-full h-auto transition-all duration-500 ease-in-out gap-6 text-primary-text text-lg font-semibold bg-primary-color dark:bg-dark-theme md:bg-inherit py-8 md:py-0 ${
              isMobileMenuOpen ? "top-20" : "-top-[500px]"
            }`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {navItems.map((item, index) => (
              <li
                className="text-primary-text dark:text-primary-text transition-all duration-300"
                key={index}
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
            {/* logged in user info and theme toggler for mobile device */}
            <div className="flex items-center justify-center gap-2 md:hidden">
              <ThemeSwitcher />
              <UserInfo />
            </div>
          </ul>
        </div>
        {/* logged in user info and theme toggler for large device  */}
        <div className="hidden md:flex items-center gap-2 ">
          <ThemeSwitcher />
          <UserInfo />
        </div>
        {/* small device drawer toggle icons */}
        <div className="md:hidden">
          <button
            className="text-3xl text-primary-text"
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
