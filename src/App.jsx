import { Link } from "react-router-dom";
import questionList from "../questionList";

export default function App() {
  return (
    <div className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-6">
      {/* Glassmorphism Container */}

      <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
        Level Up Your React Skills!
      </h1>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-4xl w-full border border-white/10">
        {/* Animated Heading */}

        {/* Navigation Links */}
        <div className="p-6">
          {/* <h1 className="text-2xl font-bold mb-4 text-white">Question List</h1> */}
          <ul className="space-y-3">
            {Object.entries(questionList).map(([id, title]) => (
              <li key={id}>
                <Link
                  target="_blank"
                  to={`/question-${id}-${title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block w-full text-left px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg hover:bg-white/30 transition duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  {id} - {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
