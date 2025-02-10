/* eslint-disable react/prop-types */
const Interests = ({ data, setData, error }) => {
  const { interests } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.value]
        : prevState.interests.filter((i) => i !== e.target.value),
    }));
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-xl">
      <div className="flex flex-col space-y-2">
        {["Coding", "Music", "JavaScript"].map((interest) => (
          <label
            key={interest}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value={interest}
              checked={interests.includes(interest)}
              onChange={handleDataChange}
              className="w-5 h-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
            <span className="text-gray-700 text-lg">{interest}</span>
          </label>
        ))}
      </div>
      {error.interests && (
        <span className="text-red-500 text-sm">{error.interests}</span>
      )}
    </div>
  );
};

export default Interests;
