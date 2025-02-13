/* eslint-disable react/prop-types */
const Timer = ({
  hours,
  minutes,
  seconds,
  isPaused,
  handleResume,
  handlePause,
  handleReset,
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-3 text-6xl font-bold bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <div>{hours.toString().padStart(2, "0")}</div>
        <span>:</span>
        <div>{minutes.toString().padStart(2, "0")}</div>
        <span>:</span>
        <div>{seconds.toString().padStart(2, "0")}</div>
      </div>
      <div className="flex gap-4">
        <button
          className="px-6 py-2 text-lg font-bold text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 transition-all"
          onClick={isPaused ? handleResume : handlePause}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button
          className="px-6 py-2 text-lg font-bold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition-all"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
