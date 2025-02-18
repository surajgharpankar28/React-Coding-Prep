/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const noOfInputs = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [codeInput, setCodeInput] = useState(noOfInputs);
  const [inputMissing, setInputMissing] = useState(noOfInputs);
  const [otpVerified, setOtpVerified] = useState(null);
  const correctOTP = "2025";

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Allow "0" but reject non-numeric values
    if (isNaN(Number(value))) {
      return;
    }

    if (index < codeInput.length - 1) {
      refs[index + 1].current.focus();
    }

    const copyInputs = [...codeInput];
    copyInputs[index] = value;
    setCodeInput(copyInputs);
  };

  console.log("Inputs : ", codeInput);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const currentValue = e.target.value;

      if (currentValue === "") {
        // If current input is empty, move to the previous input and clear it
        if (index > 0) {
          const copyInputs = [...codeInput];
          copyInputs[index - 1] = ""; // Clear the previous input
          setCodeInput(copyInputs);
          refs[index - 1].current.focus(); // Focus on the previous input
        }
      } else {
        // If current input has a value, clear it but stay in the same input
        const copyInputs = [...codeInput];
        copyInputs[index] = "";
        setCodeInput(copyInputs);
      }
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    console.log("Cpaste", data);
    if (isNaN(Number(data)) || data.length !== codeInput.length) {
      console.log("Invalid input");
      return;
    }
    const pasteCode = data.split("");
    setCodeInput(pasteCode);
    refs[codeInput.length - 1].current.focus();
  };

  const handleSubmit = () => {
    // Find indexes of missing inputs
    const missed = codeInput
      .map((item, index) => (item === "" ? index : null))
      .filter((item) => item !== null);

    setInputMissing(missed);
    // If any input is missing, prevent submission
    if (missed.length > 0) return;

    if (codeInput.join("") === correctOTP) {
      setOtpVerified(true);
    } else {
      setOtpVerified(false);
    }

    // Reset input fields
    setCodeInput(new Array(codeInput.length).fill(""));
  };

  return (
    <div className="OTPApp">
      <div className="OTPAppContainer">
        <h1>Two-factor Code </h1>
        <div>
          {noOfInputs.map((_, index) => (
            <input
              ref={refs[index]}
              type="text"
              className={`OTPInputBox ${
                inputMissing.includes(index) ? "OTPInputMissed" : ""
              }`}
              key={index}
              value={codeInput[index]}
              maxLength="1"
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
            />
          ))}
        </div>
        <div className="OTPsubmitBtnDiv">
          <button className="OTPsubmitBtn" onClick={handleSubmit}>
            Submit
          </button>
          {otpVerified === true && (
            <p className="OTPSuccess">OTP Verified Successfully</p>
          )}
          {otpVerified === false && (
            <p className="OTPFailed">OTP Invalid, Please try again</p>
          )}
        </div>
        <div className="">
          <div className="otp-note">
            <p>
              🔔 Note: OTP is <span>2025</span> for demo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
