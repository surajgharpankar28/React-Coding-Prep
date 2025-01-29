import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg border-b border-white/20 py-4 px-8 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-white tracking-wide">
        React Interview Coding Questions
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white/80 hover:text-white transition duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://github.com/surajgharpankar28/React-Interview-Coding-Question.git"
              className="text-white/80 hover:text-white transition duration-300 font-medium"
            >
              Github
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
