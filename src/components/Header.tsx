import { Link } from "react-router-dom";

const Header = () => {
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
            <span className="text-primary-text font-semibold text-3xl">
              BookNRest
            </span>
          </Link>
        </div>
        {/* nav options */}
        <div className="">
          <ul className="flex gap-6 text-primary-text text-lg font-semibold">
            {navItems.map((item, index) => (
              <li
                className="hover:text-secondary-text transition-all duration-300"
                key={index}
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="btn">
          <Link to="/sign-in">
            <button className="px-6 py-3 text-primary-color font-semibold bg-primary-text rounded-md hover:bg-secondary-text">
              SignIn
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
