import { Link } from "react-router-dom";

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
            <Link to="/owner" className="text-white hover:text-gray-400">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
