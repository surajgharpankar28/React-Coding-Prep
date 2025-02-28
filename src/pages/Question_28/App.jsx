import { useState } from "react";
import { EyeIcon, EyeOffIcon, CheckCircleIcon, Sun, Moon } from "lucide-react";
import "./styles.css";
import { useTheme } from "./theme-context";

function App() {
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strengthLevel, setStrengthLevel] = useState("Very Weak");
  const [progress, setProgress] = useState(0);
  const [criteria, setCriteria] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
  });

  /* Dark Mode */
  const { isDarkMode, toggleTheme } = useTheme(); // Fix the destructuring issue

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPasswordInput(newPassword);
    checkPasswordStrength(newPassword);
  };

  const checkPasswordStrength = (password) => {
    const minLength = password.length >= 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    setCriteria({
      minLength,
      hasUppercase,
      hasLowercase,
      hasNumber,
    });

    const strengthCount = [
      minLength,
      hasLowercase,
      hasUppercase,
      hasNumber,
    ].filter(Boolean).length;

    let level;
    let progressValue;

    switch (strengthCount) {
      case 1:
        level = "Weak";
        progressValue = 25;
        break;
      case 2:
        level = "Moderate";
        progressValue = 50;
        break;
      case 3:
        level = "Strong";
        progressValue = 75;
        break;
      case 4:
        level = "Very Strong";
        progressValue = 100;
        break;
      default:
        level = "Very Weak";
        progressValue = 0;
    }

    setStrengthLevel(level);
    setProgress(progressValue);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen flex items-center justify-center px-4`}
    >
      <div
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white"
        } max-w-md w-full p-6 shadow-lg rounded-2xl`}
      >
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border hover:text-amber-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">
          🔐 Password Strength Checker
        </h2>

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={passwordInput}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`w-full p-3 pr-10 border rounded-lg focus:ring-2 focus:outline-none ${
              isDarkMode
                ? "bg-gray-700 text-white border-gray-600 focus:ring-indigo-300"
                : "bg-white text-gray-900 border-gray-300 focus:ring-indigo-500"
            }`}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 items-center"
          >
            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>

        {/* Progress Bar */}
        <div
          className={`w-full ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded-full h-3 mt-3`}
        >
          <div
            className={`h-3 rounded-full transition-all duration-300 ${
              progress === 25
                ? "bg-red-500 w-1/4"
                : progress === 50
                ? "bg-orange-500 w-2/4"
                : progress === 75
                ? "bg-yellow-500 w-3/4"
                : progress === 100
                ? "bg-green-500 w-full"
                : "bg-gray-300 w-0"
            }`}
          ></div>
        </div>

        {/* Strength Label */}
        <p className="text-md font-medium mt-2 text-center">
          {passwordInput.length > 0 && (
            <span>
              Strength: <strong>{strengthLevel}</strong>
            </span>
          )}
        </p>

        {/* Password Strength Checklist */}
        <ul className="mt-3 space-y-2 text-sm">
          {Object.entries(criteria).map(([key, value]) => (
            <li
              key={key}
              className={`flex items-center space-x-2 ${
                value ? "text-green-500" : "text-gray-400"
              }`}
            >
              <CheckCircleIcon size={16} />
              <span>
                {key === "minLength"
                  ? "Minimum 8 characters"
                  : key === "hasUppercase"
                  ? "At least 1 uppercase letter"
                  : key === "hasLowercase"
                  ? "At least 1 lowercase letter"
                  : "At least 1 number"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
