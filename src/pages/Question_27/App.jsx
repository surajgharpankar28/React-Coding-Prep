import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const App = () => {
  const [freq, setFreq] = useState({});
  const [yaxis, setYaxis] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for button

  // Function to fetch random numbers and calculate their frequency
  const fetchData = async () => {
    setLoading(true); // Start loading animation
    const res = await fetch(
      "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new"
    );
    let data = await res.text();

    // Split the response text into an array of numbers and remove empty values
    data = data.split("\n").filter(Boolean);

    // Create a map (object) to count occurrences of each number
    const map = {};
    data?.forEach((item) => {
      map[item] = (map[item] || 0) + 1;
    });

    setFreq(map);
    setLoading(false); // Stop loading animation
  };

  // Effect to calculate Y-axis scale when frequency data changes
  useEffect(() => {
    if (Object.keys(freq).length) {
      const max = Math.max(...Object.values(freq));
      const maxVal = Math.ceil(max / 10) * 10;

      // Generate Y-axis labels in decreasing order
      let arr = [];
      for (let i = maxVal / 10; i >= 0; i--) {
        arr.push(i * 10);
      }

      setYaxis(arr);
    }
  }, [freq]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Convert frequency object to an array of objects for Recharts
  const chartData = Object.keys(freq).map((key) => ({
    number: key, // X-axis value (number)
    count: freq[key], // Y-axis value (frequency)
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Random Numbers Frequency</h1>

      {/* Chart container with background styling */}
      <div className="w-full max-w-3xl bg-white p-6 shadow-lg rounded-lg">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />{" "}
            {/* Grid lines for better readability */}
            <XAxis dataKey="number" /> {/* X-axis showing the numbers */}
            <YAxis domain={[0, Math.max(...yaxis)]} ticks={yaxis} />{" "}
            {/* Y-axis with dynamic scale */}
            <Tooltip /> {/* Tooltip to show values on hover */}
            <Bar dataKey="count" fill="#4A90E2" />{" "}
            {/* Bar representation of frequency */}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Button with Spinner Animation */}
      <div className="mt-4">
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center gap-2 ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
          onClick={fetchData}
          disabled={loading} // Disable button when loading
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Fetching..." : "Fetch New Data"}
        </button>
      </div>
    </div>
  );
};

export default App;
