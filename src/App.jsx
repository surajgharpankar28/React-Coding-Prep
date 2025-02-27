import { useState } from "react";
import questionList from "../questionList";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const QUESTIONS_PER_PAGE = 7;

export default function QuestionList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    Object.keys(questionList).length / QUESTIONS_PER_PAGE
  );

  const paginatedQuestions = Object.entries(questionList).slice(
    (currentPage - 1) * QUESTIONS_PER_PAGE,
    currentPage * QUESTIONS_PER_PAGE
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl text-center">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
            🚀 Level Up Your React Skills! 🚀
          </h1>
          <p className="text-sm sm:text-lg font-semibold text-gray-700 mt-2">
            My 28 Days React Coding Challenge
          </p>
        </div>

        {/* Card Grid */}
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
            {paginatedQuestions.map(([id, title]) => (
              <div
                key={id}
                className="bg-white text-left text rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                {/* Question Title */}
                <div className="text-xl font-semibold text-gray-900">
                  {id}. {title}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-4 text-sm">
                  {/* Explore Button */}
                  <Link
                    target="_blank"
                    to={`/question-${id}-${title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2  px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                  >
                    Explore Live <Rocket />
                  </Link>

                  {/* GitHub Button */}
                  <Link
                    target="_blank"
                    to={`https://github.com/surajgharpankar28/React-Coding-Prep/tree/main/src/pages/Question_${id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
                  >
                    <span>GitHub</span>
                    <FaGithub size={22} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination Controls */}
        {Object.keys(questionList).length > QUESTIONS_PER_PAGE && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg shadow-md disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-lg font-semibold text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg shadow-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
