import { Link } from "react-router-dom";

function PageTwo() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-4 gap-5">
          <li>
            <Link to="/practice/UseEffect" className="text-white hover:text-gray-400">
              UseEffect
            </Link>
          </li>
          <li>
            <Link to="/practice/UseContext" className="text-white hover:text-gray-400">
              UseContext
            </Link>
          </li>
          <li>
            <Link to="/practice/Api" className="text-white hover:text-gray-400">
              Api
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageTwo;