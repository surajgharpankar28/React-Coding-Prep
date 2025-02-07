import questions from "./data";
import Accordion from "./Accordion";
import { useCallback, useState } from "react";

const App = () => {
  const [allowMultipleOpen, setAllowMultipleOpen] = useState(true);
  const [active, setActive] = useState(new Set()); // Prevents duplicate values

  const handleCheckBox = () => {
    setAllowMultipleOpen((prev) => !prev);
  };

  const toggleAccordion = useCallback(
    (id) => {
      setActive((prev) => {
        const updatedActive = new Set(prev); // Create a new Set from the previous state

        if (updatedActive.has(id)) {
          updatedActive.delete(id); // If the accordion is already open, close it
        } else {
          if (!allowMultipleOpen) {
            updatedActive.clear(); // If multiple accordions are not allowed, close all others
          }
          updatedActive.add(id); // Open the clicked accordion
        }

        return updatedActive; // Update the state
      });
    },
    [allowMultipleOpen] // Dependency array ensures the function updates if allowMultipleOpen changes
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="max-w-3xl w-full p-6 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Accordion Component
        </h2>

        {/* Checkbox */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <input
            type="checkbox"
            id="multiple-open"
            checked={allowMultipleOpen}
            onChange={handleCheckBox}
            className="w-5 h-5 accent-blue-500 cursor-pointer"
          />
          <label htmlFor="multiple-open" className="text-gray-700 text-sm">
            Allow multiple accordions open?
          </label>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {questions.map((item) => (
            <Accordion
              key={item.id}
              isActive={active.has(item.id)}
              toggleAccordion={toggleAccordion}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
