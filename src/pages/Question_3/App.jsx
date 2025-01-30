import { useState } from "react";
import { EyeIcon, EyeOffIcon, CheckCircleIcon } from "lucide-react";

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
    hasSpecialChar: false,
  });

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPasswordInput(newPassword);
    checkPasswordStrength(newPassword);
  };

  /* 
    regex = “^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$” 
    where, 
    
    ^ represents the starting of the string.
    (?=.*[a-z]) represent at least one lowercase character.
    (?=.*[A-Z]) represents at least one uppercase character.
    (?=.*\\d) represents at least one numeric value.
    (?=.*[-+_!@#$%^&*., ?]) represents at least one special character.
    . represents any character except line break.
    + represents one or more times.
  */

  const checkPasswordStrength = (password) => {
    const minLength = password.length >= 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[-+_!@#$%^&*.,?]/.test(password);

    setCriteria({
      minLength,
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialChar,
    });

    const strengthCount = [
      minLength,
      hasLowercase,
      hasUppercase,
      hasNumber,
      hasSpecialChar,
    ].filter(Boolean).length;

    let level;
    let progressValue;
    switch (strengthCount) {
      case 1:
        level = "Weak";
        progressValue = 20;
        break;
      case 2:
        level = "Moderate";
        progressValue = 40;
        break;
      case 3:
        level = "Good";
        progressValue = 60;
        break;
      case 4:
        level = "Strong";
        progressValue = 80;
        break;
      case 5:
        level = "Very Strong";
        progressValue = 100;
        break;
      default:
        level = "Very Weak";
        progressValue = 0;
    }
    setStrengthLevel(level);
    setProgress(progressValue);

    // console.log(strengthLevel);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          🔐 Password Strength Checker
        </h2>

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={passwordInput}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-3 pr-10 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
          <div
            className={`h-3 rounded-full transition-all duration-300 ${
              progress === 20
                ? "bg-red-500 w-1/5"
                : progress === 40
                ? "bg-orange-500 w-2/5"
                : progress === 60
                ? "bg-yellow-500 w-3/5"
                : progress === 80
                ? "bg-blue-500 w-4/5"
                : progress === 100
                ? "bg-green-500 w-full"
                : "bg-gray-300 w-0"
            }`}
          ></div>
        </div>

        {/* Strength Label */}
        <p
          className={`text-md font-medium mt-2 text-center text-${
            progress === 100 ? "green-600" : "gray-800"
          }`}
        >
          Strength: <span className="font-bold">{strengthLevel}</span>
        </p>

        {/* Password Strength Checklist */}
        <ul className="mt-3 space-y-2 text-sm">
          <li
            className={`flex items-center space-x-2 ${
              criteria.minLength ? "text-green-600" : "text-gray-600"
            }`}
          >
            {criteria.minLength && <CheckCircleIcon size={16} />}
            <span>Minimum 8 characters</span>
          </li>
          <li
            className={`flex items-center space-x-2 ${
              criteria.hasUppercase ? "text-green-600" : "text-gray-600"
            }`}
          >
            {criteria.hasUppercase && <CheckCircleIcon size={16} />}
            <span>At least 1 uppercase letter</span>
          </li>
          <li
            className={`flex items-center space-x-2 ${
              criteria.hasLowercase ? "text-green-600" : "text-gray-600"
            }`}
          >
            {criteria.hasLowercase && <CheckCircleIcon size={16} />}
            <span>At least 1 lowercase letter</span>
          </li>
          <li
            className={`flex items-center space-x-2 ${
              criteria.hasNumber ? "text-green-600" : "text-gray-600"
            }`}
          >
            {criteria.hasNumber && <CheckCircleIcon size={16} />}
            <span>At least 1 number</span>
          </li>
          <li
            className={`flex items-center space-x-2 ${
              criteria.hasSpecialChar ? "text-green-600" : "text-gray-600"
            }`}
          >
            {criteria.hasSpecialChar && <CheckCircleIcon size={16} />}
            <span>At least 1 special character</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
