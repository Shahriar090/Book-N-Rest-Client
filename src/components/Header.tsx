import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-20 bg-primary-color fixed top-0 right-0 left-0 z-50">
      <nav className="w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-2">
        <div className="logo">
          <Link to="/">
            <span className="text-white font-medium text-2xl">BookNRest</span>
          </Link>
        </div>
        <div className="btn">
          <Link to="/sign-in">
            <button className="px-6 py-3 text-blue-600 font-medium bg-white rounded-md hover:bg-gray-100">
              SignIn
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
