import { useState } from "react";

export default function App() {
  const [principalLoanAmount, setPrincipalLoanAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    const numericValue = value ? parseFloat(value) : "";

    if (id === "principal") {
      setPrincipalLoanAmount(numericValue);
    }
    if (id === "interest") {
      setInterest(numericValue);
    }
    if (id === "years") {
      setYears(numericValue);
    }
  };

  const handleCalculate = () => {
    if (!principalLoanAmount || !interest || !years) {
      setError("Please enter all required details");
      setResult(null);
      return;
    }

    const P = parseFloat(principalLoanAmount);
    const n = parseInt(years) * 12;
    const r = parseFloat(interest) / 100 / 12;

    if (P <= 0 || r <= 0 || n <= 0) {
      setError("Please enter valid positive values");
      setResult(null);
      return;
    }

    setError("");

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setResult(emi.toFixed(2));
  };

  const handleClear = () => {
    setPrincipalLoanAmount("");
    setInterest("");
    setYears("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-[calc(100vh-6rem)]  flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Mortgage Calculator
        </h1>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="principal">
            Principal Loan Amount *
          </label>
          <input
            type="number"
            id="principal"
            value={principalLoanAmount}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="interest">
            Interest (%) *
          </label>
          <input
            type="number"
            id="interest"
            value={interest}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Interest in %"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="years">
            Years *
          </label>
          <input
            type="number"
            id="years"
            value={years}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Tenure in Years"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleCalculate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Calculate
          </button>
          {result !== null && (
            <button
              onClick={handleClear}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Clear
            </button>
          )}
        </div>
        {result !== null && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            <h3>Your Monthly EMI will be: ₹{result}</h3>
          </div>
        )}
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            <h3>{error}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
