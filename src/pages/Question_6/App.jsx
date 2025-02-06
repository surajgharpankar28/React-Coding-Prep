/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(() => {
    const savedForm = localStorage.getItem("userForm");
    return savedForm
      ? JSON.parse(savedForm)
      : {
          name: "",
          email: "",
          phone: "",
          flatNo: "",
          streetArea: "",
          city: "",
          state: "",
          zip: "",
        };
  });

  const steps = {
    1: "Personal Details",
    2: "Address Information",
    3: "Confirmation & Summary",
  };

  const totalSteps = Object.keys(steps).length;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  const zipCodeRegex = /^[1-9][0-9]{5}$/;

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Set loading to true to start showing loading animation
    setLoading(true);

    // Simulate a mock API submission (e.g., API request with setTimeout)
    setTimeout(() => {
      // Get the current form submissions from localStorage (if it exists)
      const formSubmissions =
        JSON.parse(localStorage.getItem("FormSubmitted")) || {};

      // Generate a unique ID for each submission (timestamp-based)
      const submissionId = new Date().getTime();

      // Add the new form data to the object with the unique ID
      formSubmissions[submissionId] = formData;

      // Store the updated object back to localStorage
      try {
        localStorage.setItem("FormSubmitted", JSON.stringify(formSubmissions));
        console.log("Data successfully saved to localStorage.");
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }

      // Reset form data after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        flatNo: "",
        streetArea: "",
        city: "",
        state: "",
        zip: "",
      });

      // Reset step to 1
      setCurrentStep(1);

      // Set loading to false after mock submission is complete
      setLoading(false);

      // Show success message
      alert("Form submitted successfully!");
    }, 1500); // Simulate an API delay of 2 seconds
  };

  const validateSteps = (e) => {
    if (currentStep === 1) {
      if (emailRegex.test(formData.email) && phoneRegex.test(formData.phone)) {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
        setError(""); // Clear any existing error
      } else {
        setError(
          "Please enter a valid email and phone number without country code. "
        );
      }
    }
    if (currentStep === 2) {
      if (zipCodeRegex.test(formData.zip)) {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
        setError("");
      } else {
        setError("Please enter a valid ZIP code. ");
      }
    }
    if (currentStep === totalSteps) {
      submitForm(e);
    }
  };

  // Store to localStorage when formData changes
  useEffect(() => {
    localStorage.setItem("userForm", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-2xl min-h-[500px] flex flex-col justify-between transition-all duration-300">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Step {currentStep}: {steps[currentStep]}
          </h2>
          <form action="" className="space-y-4">
            {currentStep === 1 && (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div>
                  <label
                    htmlFor="flatNo"
                    className="block text-gray-700 font-medium"
                  >
                    Flat No
                  </label>
                  <input
                    type="text"
                    id="flatNo"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter flat/apartment number"
                    value={formData.flatNo}
                    onChange={(e) =>
                      setFormData({ ...formData, flatNo: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="streetArea"
                    className="block text-gray-700 font-medium"
                  >
                    Area
                  </label>
                  <textarea
                    id="streetArea"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Enter street and area"
                    rows="3"
                    value={formData.streetArea}
                    onChange={(e) =>
                      setFormData({ ...formData, streetArea: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-gray-700 font-medium"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Enter street and area"
                    rows="3"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="streetArea"
                    className="block text-gray-700 font-medium"
                  >
                    State
                  </label>
                  <input
                    id="state"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Enter street and area"
                    rows="3"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="zip"
                    className="block text-gray-700 font-medium"
                  >
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter ZIP code"
                    value={formData.zip}
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                  />
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-lg font-semibold">
                    Please review your details.
                  </h3>

                  {/* Personal Details */}
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold text-gray-800">
                      Personal Details
                    </h4>
                    <p>
                      <strong>Name:</strong> {formData.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {formData.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {formData.phone}
                    </p>
                    {formData.dob && (
                      <p>
                        <strong>Date of Birth:</strong> {formData.dob}
                      </p>
                    )}
                    {formData.gender && (
                      <p>
                        <strong>Gender:</strong> {formData.gender}
                      </p>
                    )}
                  </div>

                  {/* Address Details */}
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p>
                      <strong>Flat No:</strong> {formData.flatNo}
                    </p>
                    <p>
                      <strong>Street & Area:</strong> {formData.streetArea}
                    </p>
                    <p>
                      <strong>City:</strong> {formData.city}
                    </p>
                    <p>
                      <strong>State:</strong> {formData.state}
                    </p>
                    <p>
                      <strong>ZIP Code:</strong> {formData.zip}
                    </p>
                  </div>
                </div>
              </>
            )}
          </form>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </div>

        {/* Navigation Buttons */}
        <div>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <button
              onClick={() => {
                setCurrentStep((prev) => Math.max(prev - 1, 1));
                setError("");
              }}
              disabled={currentStep === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === totalSteps ? "Edit" : "Previous"}
            </button>

            <span className="text-lg font-medium text-gray-800">
              Step {currentStep} of {totalSteps}
            </span>

            {/* () => {
                if (currentStep === totalSteps) {
                  submitForm();
                } else {
                  setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
                }
              } */}
            {loading ? (
              <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div> // Spinner animation
            ) : (
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={validateSteps}
              >
                {currentStep === totalSteps ? "Submit" : "Next"}
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                currentStep === 1
                  ? "bg-blue-300 w-1/3"
                  : currentStep === 2
                  ? "bg-blue-500 w-2/3"
                  : currentStep === 3
                  ? "bg-blue-700 w-full"
                  : "bg-gray-300 w-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
