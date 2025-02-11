/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./styles.css";
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

      // Formatting for display (only if length exceeds 10)
      const formattedInput =
        newInput.length > 10 ? "..." + newInput.slice(-7) : newInput;

      setDisplayInput(formattedInput); // Update UI display
      return newInput; // Return full expression (important for calculations)
    });
  };

  const calculate = () => {
    try {
      // Prevent empty input or "0" from triggering evaluation
      if (!fullInput || fullInput === "0") {
        setResult("0");
        return;
      }

      // Prevent division by zero (including cases like 5/(2-2))
      if (/\/\s*0(?!\d)/.test(fullInput) || fullInput.includes("/(0)")) {
        setResult("Division by zero");
        return;
      }

      // Prevent expressions ending with an operator
      if (/[+\-*/]$/.test(fullInput)) {
        setResult("Invalid Expression");
        return;
      }

      // Evaluate the expression safely using mathjs
      const output = evaluate(fullInput);

      // Update history
      setHistory((prevHistory) => [
        ...prevHistory,
        { input: fullInput, result: output.toString() },
      ]);

      // Handle NaN or undefined results
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
        setHistory(JSON.parse(savedHistory)); // Parse only if valid JSON
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        setHistory([]); // Reset to empty array if error occurs
      }
    }
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem("calcHistory", JSON.stringify(history));
    }
  }, [history]);

  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gray-100 px-4">
      <div className="cal-container">
        <h1 className="heading">CALCULATOR</h1>
        <div className="cal-ui">
          <div className="cal-input">{displayInput || "0"}</div>
          <div className="cal-output">{result}</div>
          <div className="cal-numbers">
            {calNumbers.map((char, index) => (
              <button
                className={`number ${
                  ["+", "-", "*", "/", "%", "(", ")"].includes(char)
                    ? "operator"
                    : ""
                } ${char == "=" ? "equal" : ""} ${char == "AC" ? "clear" : ""}`}
                key={index}
                onClick={() => {
                  if (char === "=") {
                    calculate();
                  } else if (char === "AC") {
                    setFullInput("");
                    setDisplayInput("");
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
          {history.length > 0 && (
            <div className="history">
              <div className="flex gap-4">
                <h3 className="text-md text-white font-semibold">History</h3>
                <button
                  className="underline cursor-pointer text-white rounded hover:text-red-500"
                  onClick={() => {
                    setHistory([]); // Clear history from state
                    localStorage.removeItem("calcHistory"); // Remove history from localStorage
                  }}
                >
                  Clear
                </button>
              </div>
              <div className="">
                {history.slice(-2).map((cal, index) => (
                  <li key={index}>
                    {cal.input.split("").join(" ")} = {cal.result}
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
