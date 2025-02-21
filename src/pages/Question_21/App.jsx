/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="ProgressbarOuter">
      <div
        className="ProgressbarInner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [5, 10, 30, 50, 80, 100];
  return (
    <div className="ProgressApp min-h-screen ">
      <h1 className="font-bold text-2xl mb-4">Progress Bar Component</h1>
      <div>
        {bars.map((item) => (
          <ProgressBar key={item} progress={item} />
        ))}
      </div>
    </div>
  );
}
