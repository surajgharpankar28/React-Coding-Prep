import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg border-b border-white/20 py-4 px-4 sm:px-8 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo / Title */}
      <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide">
        React Coding Preparation
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4 sm:space-x-6">
          <li>
            <Link
              to="/"
              className="text-white/80 hover:text-white transition duration-300 font-medium text-sm sm:text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://github.com/surajgharpankar28/React-Coding-Prep.git"
              className="text-white/80 hover:text-white transition duration-300 font-medium text-sm sm:text-base"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/surajgharpankar/"
              className="text-yellow-400 hover:text-yellow-200 transition duration-300 font-medium text-sm sm:text-base"
            >
              Suraj Gharpankar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
