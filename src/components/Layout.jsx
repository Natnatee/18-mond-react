import { Outlet, Link } from "react-router-dom";
// import "./1.2_pages/Page01"
// import "./1.2_pages/Page02"
// import "./1.2_pages/Page03"

const Layout = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/page01" className="text-white hover:text-gray-400">
              One
            </Link>
          </li>
          <li>
            <Link to="/page02" className="text-white hover:text-gray-400">
              Two
            </Link>
          </li>
          <li>
            <Link to="/page03" className="text-white hover:text-gray-400">
              Three
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
