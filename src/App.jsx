import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-6">
      {/* Glassmorphism Container */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-white/10">
        {/* Animated Heading */}
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          Welcome to the Questions App
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-6">
            {Array.from({ length: 3 }, (_, index) => (
              <li key={index}>
                <Link
                  target="_blank"
                  to={`/question-${index + 1}`}
                  className="block w-full text-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl shadow-lg hover:bg-white/30 transition duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Question {index + 1}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
