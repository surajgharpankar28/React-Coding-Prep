/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      console.log("from cache :", input);
      return;
    }
    console.log("API Called : ", input);
    try {
      const response = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input
      );
      const data = await response.json();
      setResults(data?.recipes);
      setCache((prev) => ({ ...prev, [input]: data?.recipes }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!input.trim()) {
      setResults([]);
      return; // Don't fetch if input is empty
    }
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  // Handle keyboard navigation

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setInput(results[selectedIndex].name);
      setShowResults(false);
    }
  };

  return (
    <div className="container">
      <div className="search-box">
        <h1 className="heading">Autocomplete Search</h1>

        <div className="search-container">
          {/* Input Field */}
          <input
            type="text"
            className="search-input"
            placeholder="Search for recipes..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setSelectedIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />

          {results.length > 0 && showResults && (
            <div className="results-container">
              {results.map((r, index) => (
                <div
                  key={r.id}
                  className={`result-item ${
                    index === selectedIndex ? "selected" : ""
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => {
                    setInput(r.name);
                    setShowResults(false);
                  }}
                >
                  {r.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
