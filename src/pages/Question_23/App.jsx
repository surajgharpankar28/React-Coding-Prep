import { useEffect, useState } from "react";
import "./styles.css";

const getNums = () => {
  const list = [];
  for (let i = 1; i <= 8; i++) {
    list.push(i);
    list.push(i);
  }
  return list;
};

export default function App() {
  const [nums, setNums] = useState(getNums());
  const [stage, setStage] = useState("init");
  const [opened, setOpened] = useState([]);
  const [solvedList, setSolvedList] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const randomNums = () => {
    return [...nums].sort(() => Math.random() - 0.5);
  };

  const handleStart = () => {
    setStage("start");
    setNums(randomNums());
    setSolvedList([]);
    setOpened([]);
    setShowAll(true);

    // Hide numbers after 3 seconds
    setTimeout(() => {
      setShowAll(false);
    }, 2000);
  };

  const handleClick = (index) => {
    if (opened.length === 2 || solvedList.includes(index) || showAll) return;
    setOpened((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (opened.length === 2) {
      const [id1, id2] = opened;
      if (nums[id1] === nums[id2]) {
        setSolvedList((prev) => [...prev, id1, id2]);
      }
      setTimeout(() => setOpened([]), 1000);
    }
  }, [opened]);

  useEffect(() => {
    if (solvedList.length === nums.length) {
      setStage("win");
    }
  }, [solvedList]);

  const getClassName = (index) => {
    if (solvedList.includes(index)) return "removeMemoryCard";
    if (showAll || opened.includes(index)) return "showMemoryCard";
    return "hidMemoryCard";
  };

  return (
    <div className="MemoryGameApp">
      <h1>Memory Game</h1>

      {stage === "init" && (
        <button className="start-btn" onClick={handleStart}>
          Play Game
        </button>
      )}

      {stage === "start" && (
        <div className="memoryGrid">
          {nums.map((num, i) => (
            <div
              key={i}
              className={`memoryCard ${getClassName(i)}`}
              onClick={() => handleClick(i)}
            >
              {showAll || opened.includes(i) || solvedList.includes(i)
                ? num
                : "?"}
            </div>
          ))}
          <button className="quit-btn" onClick={() => setStage("init")}>
            Quit
          </button>
        </div>
      )}

      {stage === "win" && (
        <div>
          <h2 className="winwin">You won the Game 🎉</h2>
          <button className="start-btn" onClick={handleStart}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
