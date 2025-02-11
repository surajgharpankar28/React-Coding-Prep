/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const [fullInput, setFullInput] = useState(""); // Stores full input
  const [displayInput, setDisplayInput] = useState("0"); // UI display
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const calNumbers = [
    "(",
    ")",
    "%",
    "AC",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "3",
    "2",
    "1",
    "-",
    ".",
    "0",
    "=",
    "+",
  ];

  const handleClick = (char) => {
    setFullInput((prev) => {
      const newInput = prev + char;
      const formattedInput =
        newInput.length > 10 ? "..." + newInput.slice(-7) : newInput;
      setDisplayInput(formattedInput);
      return newInput;
    });
  };

  const calculate = () => {
    try {
      if (!fullInput || fullInput === "0") {
        setResult("0");
        return;
      }

      // Prevent division by zero
      if (/\/\s*0(?!\d)/.test(fullInput) || fullInput.includes("/(0)")) {
        setResult("Cannot divide by zero");
        return;
      }

      // Prevent expressions ending with an operator
      if (/[\+\-\*\/]$/.test(fullInput)) {
        setResult("Invalid Expression");
        return;
      }

      const output = evaluate(fullInput);
      setHistory((prev) => [
        ...prev,
        { input: fullInput, result: output.toString() },
      ]);

      if (isNaN(output) || output === undefined) {
        setResult("Error");
      } else {
        setResult(output.toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  useEffect(() => {
    const savedHistory = localStorage.getItem("calcHistory");
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        setHistory([]);
      }
    }
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem("calcHistory", JSON.stringify(history));
    }
  }, [history]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-80 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <h1 className="text-center text-xl font-bold mb-4">CALCULATOR</h1>

        {/* Input and Result Display */}
        <div className="bg-gray-700 text-right text-lg p-3 rounded">
          {displayInput || "0"}
        </div>
        <div className="text-right text-2xl font-bold p-3">{result}</div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {calNumbers.map((char, index) => (
            <button
              key={index}
              className={`p-4 text-lg rounded transition duration-300 ${
                ["+", "-", "*", "/", "%", "(", ")"].includes(char)
                  ? "bg-blue-500 hover:bg-blue-600"
                  : char === "="
                  ? "bg-green-500 hover:bg-green-600"
                  : char === "AC"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
              onClick={() => {
                if (char === "=") {
                  calculate();
                } else if (char === "AC") {
                  setFullInput("");
                  setDisplayInput("0");
                  setResult("");
                } else {
                  handleClick(char);
                }
              }}
            >
              {char}
            </button>
          ))}
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">History</h3>
              <button
                className="text-red-400 hover:text-red-500 text-sm"
                onClick={() => {
                  setHistory([]);
                  localStorage.removeItem("calcHistory");
                }}
              >
                Clear
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-sm">
              {history.slice(-2).map((cal, index) => (
                <li key={index} className="text-gray-300">
                  {cal.input.split("").join(" ")} ={" "}
                  <span className="font-bold">{cal.result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
