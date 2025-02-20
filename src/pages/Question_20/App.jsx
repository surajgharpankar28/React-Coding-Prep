import { useState } from "react";
import { data } from "./data";
import "./styles.css";

export default function App() {
  const [leftItems, setLeftItems] = useState([...data]);
  const [rightItems, setRightItems] = useState([]);

  const toggleCheck = (list, id) =>
    list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

  const handleClick = (id, direction) => {
    if (direction === "LEFT") {
      setLeftItems((prev) => toggleCheck(prev, id));
    } else {
      setRightItems((prev) => toggleCheck(prev, id));
    }
  };

  const resetChecked = (list) =>
    list.map((item) => ({ ...item, checked: false }));

  const handleTransfer = (direction) => {
    if (direction === "LEFT_TO_RIGHT") {
      const selected = leftItems.filter((item) => item.checked);
      const remaining = leftItems.filter((item) => !item.checked);

      setRightItems((prev) => resetChecked([...prev, ...selected]));
      setLeftItems(remaining);
    } else {
      const selected = rightItems.filter((item) => item.checked);
      const remaining = rightItems.filter((item) => !item.checked);

      setLeftItems((prev) => resetChecked([...prev, ...selected]));
      setRightItems(remaining);
    }
  };

  return (
    <div className="transfer-app">
      <h1 className="font-bold text-4xl">Transfer List Component</h1>
      <div className="transfer-container">
        <div className="transfer-box">
          {leftItems.map(({ title, id, checked }) => (
            <div
              key={id}
              className={`transfer-item ${checked ? "checked" : ""}`}
              onClick={() => handleClick(id, "LEFT")}
            >
              {title}
            </div>
          ))}
        </div>

        <div className="transfer-actions">
          <button
            className="transfer-btn"
            onClick={() => handleTransfer("LEFT_TO_RIGHT")}
          >
            →
          </button>
          <button
            className="transfer-btn"
            onClick={() => handleTransfer("RIGHT_TO_LEFT")}
          >
            ←
          </button>
          {rightItems.length > 0 && (
            <button
              className="reset-btn"
              onClick={() => {
                setLeftItems([...data]);
                setRightItems([]);
              }}
            >
              Reset
            </button>
          )}
        </div>

        <div className="transfer-box">
          {rightItems.map(({ title, id, checked }) => (
            <div
              key={id}
              className={`transfer-item ${checked ? "checked" : ""}`}
              onClick={() => handleClick(id, "RIGHT")}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
