/* eslint-disable react/prop-types */
const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.value }));
  };

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Select Theme</h2>
      {["Dark", "Light"].map((option) => (
        <label
          key={option}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="radio"
            name="theme"
            value={option}
            checked={theme === option}
            onChange={handleDataChange}
            className="hidden"
          />
          <div
            className={`w-5 h-5 rounded-full border-2 border-gray-500 flex items-center justify-center ${
              theme === option ? "bg-blue-500 border-blue-500" : "bg-white"
            }`}
          >
            {theme === option && (
              <div className="w-3 h-3 bg-white rounded-full"></div>
            )}
          </div>
          <span className="text-gray-800">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Settings;
