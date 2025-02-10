/* eslint-disable no-unused-vars */
import { useState } from "react";
import Settings from "./Settings";
import Interests from "./Interests";
import Profile from "./Profile";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "Dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!data.name || data.name.length < 2) err.name = "Name is not valid";
        if (!data.age || data.age < 18) err.age = "Age is not valid";
        if (!data.email || !emailRegex.test(data.email))
          err.email = "Email is not valid";

        setError(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1)
          err.interests = "Please select at least one interest";

        setError(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab]?.validate?.()) setActiveTab((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleSubmitClick = () => {
    const isValid = tabs.every((tab) => !tab.validate || tab.validate());

    if (!isValid) return;

    alert("Form submitted successfully!");
    console.log(data);

    // Reset form
    setData({ name: "", age: "", email: "", interests: [], theme: "Dark" });
    setError({});
    setActiveTab(0);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between border-b pb-3">
        {tabs.map((t, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-lg font-medium transition-colors cursor-pointer duration-200 border-b-2 ${
              activeTab === index
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => {
              if (activeTab < index && !tabs[activeTab]?.validate?.()) return;
              setActiveTab(index);
            }}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>

      <div className="flex justify-between mt-6">
        {activeTab > 0 && (
          <button
            onClick={handlePrevClick}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg"
          >
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 ? (
          <button
            onClick={handleNextClick}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg ml-auto"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmitClick}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg ml-auto"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
