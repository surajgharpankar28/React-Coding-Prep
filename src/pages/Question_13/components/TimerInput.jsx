/* eslint-disable react/prop-types */
const InputTimer = ({ handleInput, handleStart }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-3">
        <input
          id="hours"
          placeholder="HH"
          aria-label="Hours"
          onChange={handleInput}
          className="w-16 h-16 text-2xl text-center font-bold bg-white/20 backdrop-blur-md rounded-lg outline-none"
        />
        <input
          id="minutes"
          placeholder="MM"
          aria-label="Minutes"
          onChange={handleInput}
          className="w-16 h-16 text-2xl text-center font-bold bg-white/20 backdrop-blur-md rounded-lg outline-none"
        />
        <input
          id="seconds"
          placeholder="SS"
          aria-label="Seconds"
          onChange={handleInput}
          className="w-16 h-16 text-2xl text-center font-bold bg-white/20 backdrop-blur-md rounded-lg outline-none"
        />
      </div>
      <button
        className="px-6 py-2 text-lg font-bold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition-all"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default InputTimer;
