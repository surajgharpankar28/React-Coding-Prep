/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";

const App = () => {
  const currencyList = ["USD", "EUR", "GBP", "CNY", "JPY"];
  const [currency, setCurrency] = useState(currencyList[0]);
  const [input, setInput] = useState("");
  const [cryptoRate, setCryptoRate] = useState(0);
  const [latestRate, setLatestRate] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [prevCryptoRate, setPrevCryptoRate] = useState(0);

  const intervalRef = useRef(null);

  // Fetch crypto rate
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.frontendeval.com/fake/crypto/${currency}`
      );
      const data = await response.json();
      setCryptoRate(data.value); // ✅ Set initial crypto rate
      setLatestRate(data.value); // ✅ Store for difference calculations
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on currency change
  useEffect(() => {
    fetchData();
  }, [currency]);

  // Update total value when input or cryptoRate changes
  useEffect(() => {
    setTotalValue((input * cryptoRate).toFixed(2));
  }, [input, cryptoRate]);

  // Periodically fetch latest crypto rate
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(async () => {
      try {
        const response = await fetch(
          `https://api.frontendeval.com/fake/crypto/${currency}`
        );
        const data = await response.json();

        setPrevCryptoRate(latestRate); // Store previous rate for comparison
        setLatestRate(data.value); // Update latest rate
        
      } catch (error) {
        console.error("Error fetching latest rate:", error);
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [currency, latestRate]);

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Crypto Converter</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <div className="flex flex-col gap-4">
          <input
            type="number"
            className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            min="0"
          />
          <select
            className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencyList.map((curr, index) => (
              <option
                key={index}
                value={curr}
                className="bg-gray-700 text-white"
              >
                {curr}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6 flex justify-center gap-10 items-center">
          <div className="text-2xl font-semibold">
            {currency}-{totalValue}
          </div>
          <div className="text-lg text-gray-400">WUC</div>
          <div className="text-lg font-semibold flex items-center gap-1">
            {latestRate > prevCryptoRate ? (
              <span className="text-green-500">
                ▲ {totalValue + latestRate.toFixed(2)}
              </span>
            ) : latestRate < prevCryptoRate ? (
              <span className="text-red-500">
                ▼ {totalValue - latestRate.toFixed(2)}
              </span>
            ) : (
              <span className="text-gray-400">➖ No Change</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
