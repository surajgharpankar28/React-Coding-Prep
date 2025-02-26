/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaChartLine, FaArrowUp, FaArrowDown } from "react-icons/fa";

// Currency symbols mapping
const currencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  CNY: "¥",
  JPY: "¥",
};

const App = () => {
  const currencyList = Object.keys(currencySymbols);
  const [currency, setCurrency] = useState(currencyList[0]);
  const [input, setInput] = useState("");
  const [totalValue, setTotalValue] = useState(0);
  const [oneWUCValue, setOneWUCValue] = useState(0);
  const [isUp, setIsUp] = useState(true);
  const [difference, setDifference] = useState(0);

  const fetchData = async () => {
    if (!input || isNaN(input) || Number(input) <= 0) return;

    try {
      const response = await fetch(
        `https://api.frontendeval.com/fake/crypto/${currency}`
      );
      const data = await response.json();
      const newTotalValue = parseFloat((Number(input) * data.value).toFixed(2));

      const prevTotalValue =
        parseFloat(window.sessionStorage.getItem("prevTotalValue")) || 0;
      const diff = newTotalValue - prevTotalValue;

      setOneWUCValue(data.value.toFixed(2));
      setTotalValue(newTotalValue);
      setDifference(diff);
      setIsUp(diff >= 0);

      window.sessionStorage.setItem("prevTotalValue", newTotalValue.toString());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setInput(value);
    }
  };

  useEffect(() => {
    if (!input || isNaN(input) || Number(input) <= 0) return;
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, [currency, input]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white p-4">
      <div className="bg-gray-900 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 flex flex-col">
          <span className="text-2xl">Wildly Unstable Coin (WUC)</span>
          <span className="text-lg">Crypto currency Converter</span>
        </h1>

        <div className="flex flex-col gap-5">
          {/* Input Field with Dynamic Currency Symbol */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">
              {currencySymbols[currency]}
            </span>
            <input
              type="number"
              className="w-full p-3 pl-10 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
              value={input}
              onChange={handleInputChange}
              min="0"
            />
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <FaChartLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              className="w-full p-3 pl-10 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencyList.map((curr, index) => (
                <option
                  key={index}
                  value={curr}
                  className="bg-gray-800 text-white"
                >
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Display Total Value with Symbol */}
        <div className="mt-6 flex flex-col items-center text-center">
          <p className="text-lg text-gray-400">
            1 WUC = {currencySymbols[currency]} {oneWUCValue}{" "}
          </p>
          <p className="text-sm mt-2 text-gray-400">Current WUC Value</p>
          <div className="text-4xl font-semibold mt-2">
            {currencySymbols[currency]} {totalValue}
          </div>
        </div>

        {/* Rate Change Indicator */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium ${
              isUp ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isUp ? <FaArrowUp /> : <FaArrowDown />}
            <span>
              {currencySymbols[currency]} {Math.abs(difference).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
