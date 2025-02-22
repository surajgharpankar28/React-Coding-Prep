import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleUserClick = (e) => {
    const position = e.target.id;
    if (matrix[position] || winner) return;

    const copyMatrix = [...matrix];
    copyMatrix[position] = isXTurn ? "X" : "O";
    setMatrix(copyMatrix);
    setIsXTurn((prevTurn) => !prevTurn);
  };

  const decideWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
        setWinner(matrix[a]);
        return;
      }
    }
  };

  const reset = () => {
    setMatrix(Array(9).fill(null));
    setWinner(null);
    setIsXTurn(true);
  };

  useEffect(() => {
    decideWinner();
  }, [matrix]);

  return (
    <div className="ttt-app">
      <h1 className="ttt-title">Tic-Tac-Toe</h1>
      <div className="ttt-game-board" onClick={handleUserClick}>
        {matrix.map((item, index) => (
          <div
            key={index}
            id={index}
            className={`ttt-box ${item ? `ttt-${item.toLowerCase()}` : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="ttt-game-info">
        <button className="ttt-reset-btn" onClick={reset}>
          Reset
        </button>
        <div className="ttt-status">Next Player: {isXTurn ? "X" : "O"}</div>
        {winner && (
          <div className="ttt-winner">Player {winner} won the Game</div>
        )}
      </div>
    </div>
  );
}
