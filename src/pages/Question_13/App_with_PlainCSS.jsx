import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import TimerInput from "./components/TimerInput";
import "./styles.css";

export default function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid Input");
    } else {
      setIsStart(true);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };
  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours);
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };
  const handleReset = () => {
    setIsStart(false);
    setIsPaused(false);
    resetTimer();
  };
  const handleInput = (e) => {
    const value = Math.max(parseInt(e.target.value) || 0, 0); // Prevent NaN & negatives
    if (e.target.id === "hours") setHours(value);
    if (e.target.id === "minutes") setMinutes(value);
    if (e.target.id === "seconds") setSeconds(value);
  };
  const runTimer = (sec, min, hrs, tid) => {
    if (sec > 0) {
      setSeconds((s) => Math.max(s - 1, 0));
    } else if (min > 0) {
      setMinutes((m) => Math.max(m - 1, 0));
      setSeconds(59);
    } else if (hrs > 0) {
      setHours((h) => Math.max(h - 1, 0));
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && min === 0 && hrs === 0) {
      handleReset();
      alert("Timer Completed");
      clearInterval(tid);
      return;
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid);
      }, 1000);
      setTimerId(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="heading">Countdown Timer</h1>
      {!isStart ? (
        <TimerInput handleInput={handleInput} handleStart={handleStart} />
      ) : (
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isPaused={isPaused}
          handleResume={handleResume}
          handlePause={handlePause}
          handleReset={handleReset}
        />
      )}
    </div>
  );
}
