import { useState } from "react";
import questionList from "../questionList";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

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
    <div className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-4 sm:p-24">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center animate-fade-in">
        Level Up Your React Skills!
      </h1>
      <div className="bg-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-4xl w-full border border-white/10">
        <ul className="space-y-3">
          {paginatedQuestions.map(([id, title]) => (
            <div
              key={id}
              className="flex justify-between items-center w-full px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg hover:bg-white/30 transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Link
                target="_blank"
                to={`/question-${id}-${title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="truncate"
              >
                {id} - {title}
              </Link>

              <Link
                target="_blank"
                to={`https://github.com/surajgharpankar28/React-Coding-Prep/tree/main/src/pages/Question_${id}`}
                className="flex items-center gap-2 hover:text-black"
              >
                <span>Check on GitHub</span>
                <Github />
              </Link>
            </div>
          ))}
        </ul>
      </div>
      {Object.keys(questionList).length > QUESTIONS_PER_PAGE && (
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white/20 text-white rounded-lg shadow-md hover:bg-white/30 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white/20 text-white rounded-lg shadow-md hover:bg-white/30 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
