import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Emoji feedback based on rating
  const getFeedbackMessage = (rating) => {
    if (rating === 5) return "😍 Loved it!";
    if (rating >= 4) return "😊 Really good!";
    if (rating >= 3) return "🙂 Decent!";
    if (rating >= 2) return "😕 Could be better!";
    if (rating >= 1) return "😡 Hated it!";
    return "";
  };

  return (
    <div className="StarApp">
      <div>
        <h1 className="font-bold text-4xl">Star Rating Component</h1>
        <div>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="starBtn"
              onClick={() => setRating(num)}
              onMouseOver={() => setHover(num)}
              onMouseLeave={() => setHover(rating)}
            >
              <span
                className={`star ${
                  num <= Math.max(rating, hover) ? "on" : "off"
                }`}
              >
                &#9733;
              </span>
            </button>
          ))}
          {rating > 0 && (
            <div>
              <h2>{rating} / 5 Stars</h2>
              <p className="starfeedback">{getFeedbackMessage(rating)}</p>
              <button
                className="StarResetBtn"
                onClick={() => {
                  setRating(0);
                  setHover(0);
                }}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
